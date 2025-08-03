/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let max = []
  let maxCount = 1
  let currCount = 1

  const sorted = nums.toSorted((a, b) => a - b)
  console.log(sorted)
  let currentNum = undefined
  for (let i = 0; i < sorted.length; i++) {
    // console.log(sorted[i])
    if (currentNum === sorted[i]) {
      currCount++
    }

    if (maxCount < currCount && currentNum) {
      max = [currentNum]
      maxCount = currCount
    } else if (maxCount === currCount && currentNum) {
      max.push(currentNum)
    }

    if (currentNum !== sorted[i]) {
      currCount = 1
    }
    currentNum = sorted[i]
  }

  console.log("max", max)

  let result = nums.length
  //   console.log(result)
  // while (true) {
  //   if (result[0] !== max) {
  //     result.shift()
  //   }
  //   console.log(result[result.length - 1])
  //   if (result[result.length - 1] !== max) {
  //     result.pop()
  //   }
  //   console.log(result)
  //   if (result[0] == max && result[result.length - 1] == max) {
  //     break
  //   }
  // }

  for (let i = 0; i < max.length; i++) {
    let left = nums.findIndex((num) => num === max[i])
    let right = nums.length - (nums.findLastIndex((num) => num === max[i]) + 1)
    console.log(nums)
    console.log(max[i])
    console.log("left:", left, "right", right, "nums length", nums.length)

    const length = nums.length - right - left
    console.log("length", length)
    if (result > length) {
      result = length
    }
  }
  return result
}

console.log(findShortestSubArray([1, 1, 2, 2, 2, 1]))
