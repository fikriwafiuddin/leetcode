// Delete Character to Make Fancy String

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  let result = ""
  let curr = ""
  for (let i = 0; i < s.length; i++) {
    if (curr[0] === s[i] && curr.length == 2) {
      continue
    }
    if (curr[0] !== s[i]) {
      curr = s[i]
    } else {
      curr += s[i]
    }
    result += s[i]
  }
  return result
}
