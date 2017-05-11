function range(start, end, step) {
  var rangeArr = [];
  if (step === null || step === 0) {
    var step = 1
  }
  if (step > 0) {
    for(var i = start; i <= end; i += step) {
      rangeArr.push(i);
    }
  } else {
    for(var i = start; i >= end; i += step) {
      rangeArr.push(i);
    }
  }
  return rangeArr;
}

function sum(arrayOfNum) {
  var sum = 0;
  for(var i in arrayOfNum) {
    sum += arrayOfNum[i];
  }
  return sum
}
console.log(sum(range(1, 10, 2)));
console.log('');

function reverseArray(arr) {
  var newArr = [];
  for(var i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(reverseArray(['A','B','C']));
function reverseArrayInPlace(arr) {
  for(var i = 0; i < Math.floor(arr.length / 2); i++) {
    var oldValue = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = oldValue;
  }
  return arr;
}
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
console.log('');

// recursive function solution
// function arrayToList(arr) {
//   var list = {
//     value: arr[0],
//     rest: (arr.length === 1) ? null : arrayToList(arr.slice(1))
//   }
//   return list;
// }
function arrayToList(arr) {
  var list = null;
  for (var i = arr.length - 1; i >= 0; i--)
    list = {value: arr[i], rest: list};
  return list;
}
console.log(arrayToList([10, 20]));

function listToArray(list) {
  var arr = [];
  for (var node = list; node !== null; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}
console.log(listToArray(arrayToList([10, 20])));

function prepend(value, list) {
  return {value: value, rest: list || null};
}
console.log(10, prepend(20));

function nth(list, n) {
  if (!list) return undefined;
  else if (n === 0) return list.value;
  else return nth(list.rest, n - 1);
}
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log('');

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (obj1 === null || typeof obj1 !== 'object' || obj2 === null || typeof obj2 !== 'object') {
    return false;
  }

  var propsInObj1 = 0;
  var propsInObj2 = 0;

  for (var i in obj1) {
    propsInObj1++;
  }

  for (var i in obj1) {
    propsInObj2++;

    if (!(i in obj1) || !deepEqual(obj1[i], obj2[i])) return false;

  }
  return propsInObj1 === propsInObj2;
}
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));