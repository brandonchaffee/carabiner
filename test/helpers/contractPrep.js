const aesHelper = require('./aesHelper')
const formHex = require('./formHex')

// Creates Set of Bytes16 for passing to contract
function makeByteSet (key, text) {
  const encryptedBytes = aesHelper.encryptToBytes(key, text)
  const encryptedHex = aesHelper.bytesToHex(encryptedBytes)

  for (var bytes = [], i = 0; i < encryptedHex.length / 32; i++) {
    const byteSet = encryptedHex.substr(32 * i, 32)
    const paddedHex = formHex.pad(byteSet, 16)
    bytes.push(paddedHex)
  }
  return bytes
}

module.exports = {

  // Create passable arguments for contract
  forContract: function (key, username, url, password) {
    return [
      makeByteSet(key, username),
      makeByteSet(key, url),
      makeByteSet(key, password)
    ]
  },

  // Remove prefix and padding from returned byte array
  forDecryption: function (bytesArray) {
    var byteString = ''
    for (var i = 0; i < bytesArray.length; i++) {
      byteString += formHex.unpad(bytesArray[i])
    }
    return byteString
  }
}
