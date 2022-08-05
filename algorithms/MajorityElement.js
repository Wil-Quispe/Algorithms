console.clear()

const MajorityElement = nums => {
  let answer
  const myMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (myMap.has(num)) {
      myMap.set(num, myMap.get(num) + 1)
    } else {
      myMap.set(num, 1)
    }
  }

  const max = Math.max(...myMap.values())

  myMap.forEach((value, key) => {
    if (max === value) {
      answer = key
    }
  })

  return answer
}

console.log(MajorityElement([3, 2, 3]))
// console.log(MajorityElement([2, 2, 1, 1, 1, 2, 2]))
