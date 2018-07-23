/* eslint new-cap: ["error", { "newIsCap": false }] */
const aesjs = require('aes-js')

module.exports = {
  hexToByteArray: function (hex) {
    for (var bytes = [], c = 0; c < hex.length; c += 2) { bytes.push(parseInt(hex.substr(c, 2), 16)) }
    return bytes
  },

  bytesToHex: function (bytes) {
    return aesjs.utils.hex.fromBytes(bytes)
  },

  encryptToBytes: function (key, text) {
    const textBytes = aesjs.utils.utf8.toBytes(text)
    const aesCtr = new aesjs.ModeOfOperation.ctr(key)
    return aesCtr.encrypt(textBytes)
  },

  decryptFromHex: function (key, hexValue) {
    const encryptedBytes = aesjs.utils.hex.toBytes(hexValue)
    const aesCtr = new aesjs.ModeOfOperation.ctr(key)
    const decryptedBytes = aesCtr.decrypt(encryptedBytes)
    return aesjs.utils.utf8.fromBytes(decryptedBytes)
  }
}
