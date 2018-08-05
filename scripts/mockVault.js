var Web3 = require('web3')
var web3 = new Web3(web3.currentProvider)

const shajs = require('sha.js')
const Carabiner = artifacts.require('./Carabiner.sol')
const mockVault = require('../static/mockVault.json')
const prepper = require('../test/helpers/contractPrep')
const aesHelper = require('../test/helpers/aesHelper')

const password = '&#letsgetentropyupinhere'
const shaValue = shajs('sha256').update(password).digest('hex')
const key = aesHelper.hexToByteArray(shaValue)

module.exports = async function (callback) {
  console.log('Initializing Mock Vault')
  this.token = await Carabiner.new()

  mockVault.forEach(async function (x) {
    var hexSet = prepper.forContract(key, x['username'], x['url'], x['password'])
    await this.token.addHexSet(...hexSet)
  })
}
