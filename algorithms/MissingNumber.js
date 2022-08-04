console.clear()

const MissingNumber = nums => {
  let answer
  const sorted = nums.sort((a, b) => a - b)

  for (let i = 0; i < sorted.length + 1; i++) {
    const num = sorted[i]
    if (i !== num) {
      answer = i
      break
    }
  }

  return answer
}

// console.log(MissingNumber([0, 3, 2]))
console.log(MissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
