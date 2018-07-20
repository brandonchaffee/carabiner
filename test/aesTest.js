var aesjs = require('aes-js');
var shajs = require('sha.js')


function hexToBytes(hex) {
    for (var bytes = [], c = 0; c < hex.length; c += 2)
    bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
}

var shaValue = shajs('sha256').update('42').digest('hex')
var key = hexToBytes(shaValue)


var text = 'Text may be any length you wish, no padding is required.'
var textBytes = aesjs.utils.utf8.toBytes(text);

var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
var encryptedBytes = aesCtr.encrypt(textBytes);
var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);

var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
var decryptedBytes = aesCtr.decrypt(encryptedBytes);

var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
console.log(decryptedText)
