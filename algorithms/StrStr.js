console.clear()

const strStr = (haystack, needle) => {
  if (needle === '') return 0

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.indexOf(needle) || haystack.indexOf(needle) === 0)
      return haystack.indexOf(needle)
  }
  return -1
}

console.log(strStr('a', 'a'))
