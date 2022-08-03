console.clear()
// The overall run time complexity should be O(log (m+n)).

const FindMedianSortedArrays = (nums1, nums2) => {
  const merged = nums1.concat(nums2).sort((a, b) => a - b)
  const middle = Math.ceil(merged.length / 2)
  const condition = merged.length % 2 === 0 // is par

  if (condition) {
    return (merged[middle - 1] + merged[middle]) / 2
  } else {
    return merged[middle - 1]
  }
}

console.log(FindMedianSortedArrays([1, 2], [3, 4]))
