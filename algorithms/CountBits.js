console.clear()
console.log('----------------')

const CountBits = n => {
  const bits = [128, 64, 32, 16, 8, 4, 2, 1]
  const result = []
  for (let i = 0; i < n + 1; i++) {
    const bitArr = []
    let cal = `${i}`
    for (let k = 0; k < bits.length; k++) {
      const bit = bits[k]
      if (cal >= bit) {
        bitArr.push(1)
        cal = cal - bit
      } else {
        bitArr.push(0)
      }
    }

    result.push(bitArr)
  }

  return result.map(bitsArr => {
    return bitsArr.reduce((acc, curr) => acc + curr)
  })
}

console.log(CountBits(8))
