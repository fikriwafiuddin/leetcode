var findTheDifference = function (s, t) {
  let arrS = s.split("").sort()
  let arrT = t.split("").sort()
  let result = ""
  for (let i = 0; i < arrS.length; i++) {
    if (arrS[i] != arrT[i]) {
      result = arrT[i]
      break
    }
  }
  return result ? result : arrT[arrT.length - 1]
}

console.log(findTheDifference("abcd", "abcde"))
