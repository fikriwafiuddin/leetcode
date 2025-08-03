/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0
  const arr = []

  let left = 0
  let right = 0

  while (right < s.length) {
    if (!arr.includes(s[right])) {
      arr.push(s[right])
      if (max < arr.length) {
        max = arr.length
      }
      right++
    } else {
      left++
      arr.shift()
    }
  }

  return max
}
