console.clear()

const FindDisappearedNumbers = nums => {
  if (nums.length <= 1) return []
  const result = []

  const goodNum = [...new Set(nums)].sort((a, b) => a - b)

  for (let i = 1; i < nums.length + 1; i++) {
    const num = goodNum[i - 1]

    if (num === i) {
      console.log({ num, i }, 'igual')
    } else {
      goodNum.splice(i - 1, 0, i)
      result.push(i)
    }
  }

  return result
}

// console.log(FindDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
// console.log(FindDisappearedNumbers([1, 1]))
console.log(FindDisappearedNumbers([4, 3, 2, 7, 7, 2, 3, 1]))
