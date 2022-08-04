console.clear()

const SingleNumber = nums => {
  if (nums.length <= 1) return nums[0]

  let myMap = new Map()
  let answer
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i]

    if (myMap.has(element)) {
      myMap.set(element, myMap.get(element) + 1)
    } else {
      myMap.set(element, 1)
    }
  }

  const arr = []

  for (const n of myMap.values()) {
    arr.push(n)
  }

  const min = Math.min(...arr)

  myMap.forEach(function (value, key) {
    if (value === min) answer = key
  })

  return answer
}

// console.log(SingleNumber([2, 2, 2, 3, 3, 3, 3, 3, 1, 3, 1, 4]))
console.log(SingleNumber([1]))
