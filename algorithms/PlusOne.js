console.clear()

const PlusOne = digits => {
  const lastDigit = digits[digits.length - 1]
  if (lastDigit === 9) {
    let c = 1
    while (digits[digits.length - c] === 9) {
      digits.splice(digits.length - c, 1, Number(0))
      c++
    }
    if (digits.length - c < 0) {
      digits.splice(0, 0, 1)
    } else digits.splice(digits.length - c, 1, digits.at(-c) + 1)

    return digits
  }
  digits.splice(-1, 1, lastDigit + 1)

  return digits
}

console.log(PlusOne([1, 2, 3]))
// console.log(PlusOne([9, 9]))
// console.log(PlusOne([9, 9, 9, 9, 9, 9, 9, 9]))
// console.log(PlusOne([4, 2, 3, 9, 9]))
// console.log(PlusOne([4, 2, 3, 9]))
// console.log(PlusOne([6, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
// console.log(PlusOne([6, 7, 0, 5, 5, 4, 9]))
