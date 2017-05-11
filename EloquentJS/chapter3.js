function minNum(num1, num2) {
  return (num1 <= num2) ? num1 : num2;
}
console.log(minNum(5, 8));
console.log('');

function isEven(num) {
  if (num === 0) return true;
  else if (num === 1) return false;
  else if (num < 0) return isEven(-num);
  else return isEven(num - 2);
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log('');

function countBs(str) {
  var count = 0;
  var find = find || 'B'
  for (var position = 0; position < str.length; position++) {
    if (str.charAt(position) === find) count++;
  }
  return count;
}
console.log(countBs("BBC"));
console.log('');

function countChar(str, find) {
  var count = 0;
  for (var position = 0; position < str.length; position++) {
    if (str.charAt(position) === find) count++;
  }
  return count;
}
function countBs(str) {
  return countChar(str, 'B');
}
console.log(countChar("kakkerlak", "k"));