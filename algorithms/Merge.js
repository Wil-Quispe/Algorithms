console.clear()

const Merge = (nums1, m, nums2, n) => {
  console.log(nums1)
  console.log(nums2)
  console.log('----------')

  nums1.splice(m, nums1.length - m)
  nums1.splice(n, nums2.length - n)

  console.log(nums1)
  console.log(nums2)
  console.log('----------')

  nums1.splice(n, 0, ...nums2)
  nums1.sort((a, b) => a - b)

  console.log(nums1)
}

Merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
// Merge([0], 0, [1], 1)
// Merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)
