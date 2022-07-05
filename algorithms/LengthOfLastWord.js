console.clear()

const LengthOfLastWord = s => {
  let res = ''
  const arr = s.split(' ').reverse()

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]

    if (element === '') continue
    if (element.length > 0) {
      res += element
      break
    }
  }

  return res.length
}

// LengthOfLastWord('luffy is still joyboy')
LengthOfLastWord('   fly me   to   the moon  ')
// LengthOfLastWord('Hello World')
