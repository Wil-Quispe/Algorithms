console.clear()

const Intersect = (nums1, nums2) => {
  const result = []

  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i]

    for (let k = 0; k < nums2.length; k++) {
      const nunNested = nums2[k]

      if (num === nunNested) {
        result.push(nunNested)
        nums2.splice(k, 1)
        k--
        break
      }
    }
  }

  return result
}

// console.log(Intersect([1, 2, 2, 1], [2]))
console.log(Intersect([1, 2, 2, 1], [2, 2]))
console.log(Intersect([4, 9, 5], [9, 4, 9, 8, 4]))
