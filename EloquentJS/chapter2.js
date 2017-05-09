for(let char = '#'; char.length <= 7; char += '#') {
  console.log(char)
}

console.log('')

for(let num = 1; num <= 100; num++) {
  let outputString = ''
  if (num % 3 === 0) outputString += 'Fizz'
  if (num % 5 === 0) outputString += 'Buzz'
  console.log(outputString || num)
}

console.log('')

let boardSize = 8
let outputString = ''
for (let outerLoop = 0; outerLoop < boardSize; outerLoop++) {
  for (let innerLoop = 0; innerLoop < boardSize; innerLoop++) {
    ((innerLoop + outerLoop) % 2 === 0) ? outputString += ' ' : outputString += '#'
  }
  outputString += '\n'
}
console.log(outputString)
