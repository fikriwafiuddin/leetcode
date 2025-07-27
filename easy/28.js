/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function (haystack, needle) {
//   const result = []
//   const indexes = []
//   for (let i = 0; i < haystack.length; i++) {
//     if (needle[0] === haystack[i]) {
//       console.log(i, needle.length)
//       result.push(haystack.slice(i, i + needle.length))
//       indexes.push(i)
//     }
//   }
//   console.log(result)
//   const output = result.findIndex((value) => value === needle)
//   if (output === -1) return -1
//   return indexes[output]
// }

var strStr = function (haystack, needle) {
  return haystack.indexOf(needle)
}

console.log(strStr("hello", "ll"))
