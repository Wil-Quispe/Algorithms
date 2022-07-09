console.clear()

const PascalTriangle = numRows => {
  const pascalsTriangle = new Array(numRows)

  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1)
    row[0] = 1
    row[row.length - 1] = 1
    for (let j = 1; j < row.length - 1; j++) {
      let rowAbove = pascalsTriangle[i - 1]
      row[j] = rowAbove[j] + rowAbove[j - 1]
    }
    pascalsTriangle[i] = row
  }

  return pascalsTriangle
}

console.log(PascalTriangle(5))

// this was done with help of a youtuber
