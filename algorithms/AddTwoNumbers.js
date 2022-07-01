console.clear()
// const list1 = [2, 4, 3]
// const list2 = [2, 4, 3]
const list1 = [0]
const list2 = [0]

const AddTwoNumbers = (l1, l2) => {
  const arrToStr = list => {
    let uu = ''
    // list.map(n => {
    //   uu += `${n}`
    // })

    // for (const n of list) {
    //   uu += `${n}`
    // }

    list.forEach(n => {
      uu += `${n}`
    })

    return uu
  }

  let num1 = arrToStr(l1)
  let num2 = arrToStr(l2)

  const number = String(Number(num1) + Number(num2))
  const good = []
  for (const n of number) {
    good.unshift(Number(n))
  }

  return good
}

console.log(AddTwoNumbers(list1, list2))

export default AddTwoNumbers
