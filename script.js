var isPalindrome = function (str) {
  console.dir(str)

  str = str.toLowerCase().replace(/\s{1,}/g, '')

  if (str.length % 2 === 0) return false

  for (var i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false
    }
  }

  return true
}

console.log(isPalindrome('шиш'))
console.log(isPalindrome('кахsк'))
console.log(isPalindrome('казак'))
console.log(isPalindrome('а роза упала на лапу азора'))
