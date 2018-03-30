// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
let i = 1, result = ''
while(i <= n){
  result = output(i) + outputSpace(n, i)
  console.log(result)
  i++
}


}

function output(n){
  let i =1, s =''
  while(i <=n){
    s = s+'#'
    i++
  }
  return s
}

function outputSpace(n, level){
  let i =0, s =''
  while(i < n-level){
    s = s+' '
    i++
  }
  return s
}

module.exports = steps;
