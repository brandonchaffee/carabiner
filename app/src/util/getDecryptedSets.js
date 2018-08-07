const shajs = require('sha.js')
const prepper = require('./helpers/contractPrep')
const aesHelper = require('./helpers/aesHelper')

function prepAndDecrypt (item, key) {
  const preppedHex = prepper.forDecryption(item)
  console.log(item, preppedHex)
  return aesHelper.decryptFromHex(key, preppedHex)
}

export default function (eSets, password) {
  var shaValue = shajs('sha256').update(password).digest('hex')
  var key = aesHelper.hexToByteArray(shaValue)
  var dSets = eSets.map(function (e) {
    e._username = prepAndDecrypt(e._username, key)
    e._url = prepAndDecrypt(e._url, key)
    e._password = prepAndDecrypt(e._password, key)
    return e
  })

  return dSets
}
