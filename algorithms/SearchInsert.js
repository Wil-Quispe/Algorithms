console.clear()

const searchInsert = (nums, target) => {
  let res = 0
  // if (target === 0) return 0
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    if (n === target) {
      console.log('igual')
      res = i
      break
    } else if (n < target && nums[i + 1] > target) {
      console.log('segundo')
      res = i + 1
      break
    } else if (n > target) {
      console.log('tercero')
      res = i
      break
    } else {
      console.log('ultimo')
      res = i + 1
    }
  }
  return res
}

// console.log(searchInsert([1, 3, 5, 6], 2))
// console.log(searchInsert([3, 4, 6, 7, 8, 10], 5))
// console.log(searchInsert([1, 2, 3, 4, 5, 10], 2))
// console.log(searchInsert([1, 3, 5, 6], 7))
console.log(searchInsert([2, 5], 1))
