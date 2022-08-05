console.clear()

const MoveZeroes = nums => {
  const zeros = []

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i]

    if (element === 0) {
      nums.splice(i, 1)
      zeros.push(0)
      i--
    }
  }

  nums.push(...zeros)
  console.log(nums)
}

// MoveZeroes([0, 1, 0, 3, 2, 0, 0, 5])
MoveZeroes([0])
// MoveZeroes([0, 1, 3])
