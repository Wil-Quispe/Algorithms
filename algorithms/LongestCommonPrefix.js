console.clear()

const LongestCommonPrefix = strs => {
  let prefix = ''
  if (strs.length === 0) return prefix

  for (let i = 0; i < strs[0].length; i++) {
    const palabra = strs[0][i]

    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== palabra) return prefix
    }
    prefix = prefix + palabra
  }
  return prefix
}

console.log(LongestCommonPrefix(['flower', 'flow', 'flight']))
