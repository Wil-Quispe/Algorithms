console.clear()
const mySqrt = x => {
  const res = String(Math.sqrt(x)).split('')
  let r = ''
  for (let i = 0; i < res.length; i++) {
    const num = res[i]
    if (num === '.') {
      break
    }
    r += num
  }
  return r
}

console.log(mySqrt(4))
