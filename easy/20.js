/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
//   if (s.length % 2 === 1) return false

//   let stack = []
//   for (let i = 0; i < s.length; i++) {
//     console.log(s[i])
//     if (s[i] === "(") {
//       stack.push(")")
//     }

//     if (s[i] === "[") {
//       stack.push("]")
//     }

//     if (s[i] === "{") {
//       stack.push("}")
//     }

//     if (s[i] === ")") {
//       const index = stack.findIndex((value) => value === ")")
//       console.log(index)
//       if (index === -1) return false
//       stack.splice(index, 1)
//     }

//     if (s[i] === "]") {
//       const index = stack.findIndex((value) => value === "]")
//       if (index === -1) return false
//       stack.splice(index, 1)
//     }

//     if (s[i] === "}") {
//       const index = stack.findIndex((value) => value === "}")
//       if (index === -1) return false
//       stack.splice(index, 1)
//     }
//   }

//   console.log(stack)
//   return stack.length === 0
// }

// var isValid = function (s) {
//   const stack = []
//   for (let i = 0; i < s.length; i++) {
//     let char = s[i]
//     if (char === "(" || char === "[" || char === "{") {
//       stack.push(char)
//     } else {
//       let prevChar = stack.pop()
//       if (char === ")" && prevChar !== "(") return false
//       if (char === "]" && prevChar !== "[") return false
//       if (char === "}" && prevChar !== "{") return false
//       if (!prevChar) return false
//     }
//   }

//   return stack.length === 0
// }

var isValid = function (s) {
  const stack = []
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  }

  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (char === "(" || char === "[" || char === "}") {
      stack.push(char)
    } else {
      let prevChar = stack.pop()
      if (prevChar !== pairs[char]) return false
    }
  }

  return stack.length === 0
}

console.log(isValid("()"))
