const isValid = s => {
  const stack = []
  const valid = { '(': ')', '[': ']', '{': '}' }

  if (s.length <= 0) return false

  for (const bracket of s) {
    if (stack.length > 0 && bracket === stack[stack.length - 1]) {
      stack.pop()
    } else if (valid[bracket]) {
      stack.push(valid[bracket])
    } else {
      return false
    }
  }
  console.log({ length: stack.length, stack })

  return stack.length === 0
}

export default isValid
