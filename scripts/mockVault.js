const fs = require('file-system')
const shajs = require('sha.js')
const Carabiner = artifacts.require('./Carabiner.sol')
const mockVault = require('../static/mockVault.json')
const prepper = require('../test/helpers/contractPrep')
const aesHelper = require('../test/helpers/aesHelper')

const password = '&#letsgetentropyupinhere'
const shaValue = shajs('sha256').update(password).digest('hex')
const key = aesHelper.hexToByteArray(shaValue)

function createJSONFile (filename, payload) {
  fs.writeFile(filename, JSON.stringify(payload), function (err) {
    if (err) {
      console.log(err)
      return
    }

    fs.exists(filename, function (exists) {
      if (exists) {
        return true
      }
    })
  })
}

function generateContractJSON (address, abi, externals) {
  const contractJSON = {
    'address': address,
    'abi': abi
  }

  createJSONFile('./app/src/util/generated/carabiner.json', contractJSON)
}

module.exports = async function (callback) {
  this.token = await Carabiner.new()

  mockVault.forEach(async function (x) {
    var hexSet = prepper.forContract(key, x['username'], x['url'], x['password'])
    await this.token.addHexSet(...hexSet)
  })
  console.log('Mock Vault Initializing')

  await generateContractJSON(
    this.token.address,
    this.token.abi
  )
}
