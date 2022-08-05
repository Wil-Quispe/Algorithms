console.clear()

const Intersection = (nums1, nums2) => {
  const result = []
  if (nums1.length > nums2.length) {
    for (let i = 0; i < nums1.length; i++) {
      const num = nums1[i]

      for (let k = 0; k < nums2.length; k++) {
        const nunNested = nums2[k]

        if (num === nunNested) {
          result.push(nunNested)
        }
      }
    }
  }

  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i]

    for (let k = 0; k < nums2.length; k++) {
      const nunNested = nums2[k]

      if (num === nunNested) {
        result.push(nunNested)
      }
    }
  }

  const res = [...new Set(result)]
  return res
}

console.log(Intersection([1, 2, 3, 1], [2, 2]))
