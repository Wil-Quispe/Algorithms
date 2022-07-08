console.clear()

const AddBinary = (a, b) => {
  let lleva = ''
  let sum = ''

  const dd = [a, b]
  const greater = dd.sort((a, b) => b.length - a.length)

  let counter = -1

  for (let i = greater[0].length - 1; i >= 0; i--) {
    const d = greater[0][i]
    const k = greater[1].at(counter)
    console.log({ d, k })
    //                      1
    // 110010 --> A --> 111101
    // 100 --> B -->    01
    //                       0

    if (d === '1' && k === '1') {
      if (lleva === '1') {
        lleva = '1'
        sum = `1${sum}`
        counter--
        continue
      }
      lleva = '1'
      sum = `0${sum}`
      counter--
    } else if (d === '0' && k === '1') {
      sum = `1${sum}`
      counter--
    } else if (d === '1' && k === '0') {
      sum = `1${sum}`
      counter--
    } else if (d === '0' && k === '0') {
      if (lleva === '1') {
        sum = `1${sum}`
        lleva = ''
        counter--
        continue
      }
      sum = `0${sum}`
      counter--
    } else if (d && k === undefined) {
      if (lleva === '1' && d === '1') {
        sum = `0${sum}`
        lleva = '1'
      } else if (lleva === '1' && d === '0') {
        sum = `1${sum}`
        lleva = ''
      } else if (lleva === '' && d === '1') {
        sum = `1${sum}`
      } else if (lleva === '' && d === '0') {
        sum = `0${sum}`
      }
    }
    console.log({ sum })
  }

  console.log({ lleva })
  // console.log(sum)
  console.log(`${lleva}${sum}`)

  // console.log(lleva)
  return `${lleva}${sum}`
}

// AddBinary('101111', '10')
// AddBinary('100', '110010')
AddBinary('110010', '10111')

// for (let j = b.length - 1; j >= 0; j--) {
//   const k = b[j]
//   if (d === '1' && k === '1') {
//     lleva = '1'
//     sum = `0${sum}`
//     break
//   } else if (d === '0' && k === '1') {
//     sum = `1${sum}`
//     break
//   } else if (d === '1' && k === '0') {
//     sum = `1${sum}`
//     break
//   } else if (d === '0' && k === '0') {
//     sum = `0${sum}`
//     break
//   } else break
// }

// if (d === '1' && lleva === '1') {
//   sum = `10${sum}`
//   break
// } else if (d === '0' && lleva === '1') {
//   sum = `1${sum}`
//   break
// } else if (d === '1' && lleva === '0') {
//   sum = `1${sum}`
//   break
// } else if (d === '0' && lleva === '0') {
//   break
// }

// if (lleva === '1') {
//   console.log('sisi')
//   if (d === '1' && lleva !== '1') {
//     sum = `0${sum}`
//     continue
//   }
//   sum = `1${sum}`
//   console.log({ summ: sum })
//   continue
// }
// sum = `${d}${sum}`
