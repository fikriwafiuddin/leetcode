/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function (nums, val) {
//   let k = 0
//   let index = 1

//   for (let i = 0; i < nums.length; i++) {
//     let curr = nums[i]
//     if (curr === val) {
//       while (true) {
//         if (nums.length - index === i) break

//         let last = nums[nums.length - index]
//         if (last !== val) {
//           nums[i] = last
//           nums[nums.length - index] = curr
//           break
//         }
//         index++
//       }
//     }

//     k++
//   }
//   console.log(nums)

//   return k
// }

var removeElement = function (nums, val) {
  let k = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]
      k++
    }
  }

  return k
}

console.log(removeElement([2], 3))
