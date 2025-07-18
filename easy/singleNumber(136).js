// COMPLEXITY 0(log n)
// var singleNumber = function (nums) {
//   let iterations = 0
//   let sorted = nums.sort((a, b) => a - b)
//   while (true) {
//     for (let i = 0; i < sorted.length; i++) {
//       if (sorted[i] !== sorted[i + 1] && iterations == 0) {
//         return sorted[i]
//       }
//       if (sorted[i] !== sorted[i + 1] && iterations != 0) {
//         iterations = 0
//         sorted = sorted.slice(iterations + 2)
//         break
//       }
//       iterations++
//     }
//   }
// }

var singleNumber = function (nums) {
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i]
  }
  return result
}

console.log(new Date())
console.log(singleNumber([4, 1, 2, 1, 2]))
console.log(new Date())
