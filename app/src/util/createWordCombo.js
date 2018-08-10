var wordSet = require('../../static/wordSet.json')

export default function (minLength, saltsBefore, isSaltedBetween, saltsAfter) {
  var password = ''
  const CSalt = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

  for (var b = 0; b < saltsBefore; b++) {
    password += CSalt.charAt(Math.floor(Math.random() * CSalt.length))
  }
  while (password.length < minLength) {
    password += wordSet[Math.floor(Math.random() * wordSet.length)]
    if (isSaltedBetween) {
      password += CSalt.charAt(Math.floor(Math.random() * CSalt.length))
    }
  }
  for (var a = 0; a < saltsAfter; a++) {
    password += CSalt.charAt(Math.floor(Math.random() * CSalt.length))
  }
  console.log(password)
}
