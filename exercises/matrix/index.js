// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
 let result =  []
 for(i=0;i<n;i++){
   result[i] = new Array()
 }
 let row = 0, col = n-1
 let count=1
 while(row <= Math.floor(n/2) && col >= 0){
      count = right(row,col,count,result)
      count = down(row,col,count,result)
      count = left(row,col,count,result)
      count = up (row,col,count,result)
      row++
      col --
 }
 console.log(result)
 return result

}

function right(row,col, count, result){
  let i = row
  while( i<= col){
    result[row][i++] = count++
  }
  return count
}

function down(row,col, count, result){
  let i = row
  while( i < col){
    result[++i][col] = count++
  }
  return count
}

function left(row,col, count, result){
  let i = col-1
  while( i >= row){
    result[col][i--] = count++
  }
  return count
}

function up(row,col, count, result){
  let i = col-1

  while( i > row){
    result[i--][row] = count++
  }
  return count
}


module.exports = matrix;
