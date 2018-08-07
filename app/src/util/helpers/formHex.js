module.exports = {
  pad: function (str, count) {
    if (str.substring(0, 2) === '0x') {
      str = str.slice(2)
    }
    const padVal = str.padStart(count * 2, '0')
    return '0x'.concat(padVal)
  },

  unpad: function (str, count) {
    if (str.substring(0, 2) === '0x') {
      str = str.slice(2)
    }
    var padCount = 0
    for (var i = 0; i < str.length; i += 2) {
      if (str.substr(i, 2) === '00') { padCount++ }
    }
    return str.slice(padCount * 2)
  }
}
