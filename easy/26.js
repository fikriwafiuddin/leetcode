/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // nums.sort((a, b) => a - b)
  // let current = undefined
  // let result = []
  // let index = 0
  // for(let i = 0; i < nums.length; i++) {
  //     if(current !== nums[i]) {
  //         result.push(nums[i])
  //         nums[index] = nums[i]
  //         index++
  //     }
  //     current = nums[i]
  // }

  // return result.length
  let uniqe = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[uniqe] < nums[i]) {
      uniqe++
      nums[uniqe] = nums[i]
    }
  }
  return uniqe + 1
}
