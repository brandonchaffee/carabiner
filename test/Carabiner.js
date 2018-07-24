const shajs = require('sha.js')
const aesHelper = require('./helpers/aesHelper')
const Carabiner = artifacts.require('./Carabiner.sol')
const formHex = require('./helpers/formHex')

const usernames = ['coherentsnazzy', 'raggedabject', 'absentmedium']
const urls = ['www.google.com', 'www.duckduckgo.com', 'www.bing.com']
const passwords = [
  'thisisabadpassword',
  'addingmorelettersincreasesentropy',
  'justmakesureitwouldntbefoundinanyexistingdictionary'
]

const mainPassword =
'thisisareallygoodpasswordbecauseitisabsurdlylongandwouldntbefoundinanydictionaryinthewholeworldwidewebbuttobesafeletsaddsomeextracharactersq34tgarga@%'

const shaValue = shajs('sha256').update(mainPassword).digest('hex')
const key = aesHelper.hexToByteArray(shaValue)

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

// Create passable arguments for contract
function prepForContract (key, username, url, password) {
  return [
    makeByteSet(key, username),
    makeByteSet(key, url),
    makeByteSet(key, password)
  ]
}

// Remove prefix and padding from returned byte array
function prepForDecryption (bytesArray) {
  var byteString = ''
  for (var i = 0; i < bytesArray.length; i++) {
    byteString += formHex.unpad(bytesArray[i])
  }
  return byteString
}

contract('Carabiner', function (accounts) {
  const initHexSet = prepForContract(key, usernames[0], urls[0], passwords[0])
  const addHexSet = prepForContract(key, usernames[1], urls[1], passwords[1])
  const modHexSet = prepForContract(key, usernames[2], urls[2], passwords[2])
  beforeEach(async function () {
    this.token = await Carabiner.new()
    await this.token.addHexSet(...initHexSet)
    await this.token.addHexSet(...addHexSet)
  })
  describe('Creation', async function () {
    it('initializes initial set correctly', async function () {
      const hexSetOutput = await this.token.getHexSetAt(0)
      assert.deepEqual(hexSetOutput[0], initHexSet[0])
      assert.deepEqual(hexSetOutput[1], initHexSet[1])
      assert.deepEqual(hexSetOutput[2], initHexSet[2])
    })
    it('initializes additional set correctly', async function () {
      const hexSetOutput = await this.token.getHexSetAt(1)
      assert.deepEqual(hexSetOutput[0], addHexSet[0])
      assert.deepEqual(hexSetOutput[1], addHexSet[1])
      assert.deepEqual(hexSetOutput[2], addHexSet[2])
    })
  })
  describe('Modification', function () {
    it('modifies username correctly', async function () {
      await this.token.changeHexSetUsername(0, modHexSet[0])
      const hexSetOutput = await this.token.getHexSetAt(0)
      assert.deepEqual(hexSetOutput[0], modHexSet[0])
      assert.deepEqual(hexSetOutput[1], initHexSet[1])
      assert.deepEqual(hexSetOutput[2], initHexSet[2])
    })
    it('modifies url correctly', async function () {
      await this.token.changeHexSetURL(0, modHexSet[1])
      const hexSetOutput = await this.token.getHexSetAt(0)
      assert.deepEqual(hexSetOutput[0], initHexSet[0])
      assert.deepEqual(hexSetOutput[1], modHexSet[1])
      assert.deepEqual(hexSetOutput[2], initHexSet[2])
    })
    it('modifies password correctly', async function () {
      await this.token.changeHexSetPassword(0, modHexSet[2])
      const hexSetOutput = await this.token.getHexSetAt(0)
      assert.deepEqual(hexSetOutput[0], initHexSet[0])
      assert.deepEqual(hexSetOutput[1], initHexSet[1])
      assert.deepEqual(hexSetOutput[2], modHexSet[2])
    })
  })
  describe('Pulling', function () {
    it('pulled username decrypts properly', async function () {
      const hexSetOutput = await this.token.getHexSetAt(0)
      const preppedHex = prepForDecryption(hexSetOutput[0])
      const decryptedOutput = aesHelper.decryptFromHex(key, preppedHex)
      assert.equal(decryptedOutput, usernames[0])
    })
    it('pulled url decrypts properly', async function () {
      const hexSetOutput = await this.token.getHexSetAt(0)
      const preppedHex = prepForDecryption(hexSetOutput[1])
      const decryptedOutput = aesHelper.decryptFromHex(key, preppedHex)
      assert.equal(decryptedOutput, urls[0])
    })
    it('pulled password decrypts properly', async function () {
      const hexSetOutput = await this.token.getHexSetAt(0)
      const preppedHex = prepForDecryption(hexSetOutput[2])
      const decryptedOutput = aesHelper.decryptFromHex(key, preppedHex)
      assert.equal(decryptedOutput, passwords[0])
    })
  })
})
