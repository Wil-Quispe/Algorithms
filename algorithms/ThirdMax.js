console.clear()

const ThirdMax = nums => {
  const le = [...new Set(nums.sort((a, b) => b - a))]

  if (le[2] !== null && le[2] !== undefined) {
    return le[2]
  }

  return Math.max(...le)
}

// console.log(ThirdMax([2, 1]))
// console.log(ThirdMax([2, 2, 3, 1]))
console.log(ThirdMax([3, 3, 4, 3, 4, 3, 0, 3, 3]))
