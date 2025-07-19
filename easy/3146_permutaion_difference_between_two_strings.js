/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
  const arrT = t.split("")
  let result = 0
  for (let i = 0; i < s.length; i++) {
    let findIndex = arrT.findIndex((val) => val == s[i])
    result += Math.abs(i - findIndex)
  }
  return result
}
