// Alternate Groups l
/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors) {
  const arr = [...colors, colors[0], colors[1]]
  let result = 0
  for (let i = 0; i < colors.length; i++) {
    if (arr[i] !== arr[i + 1] && arr[i] == arr[i + 2]) {
      result++
    }
  }
  return result
}
