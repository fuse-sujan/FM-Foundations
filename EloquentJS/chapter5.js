var arrays = [[1, 2, 3], [4, 5], [6]];
var arrays = arrays.reduce(function (combination, arr) {
  return combination.concat(arr);
})
console.log(arrays);
console.log('');

var ancestry = JSON.parse(require('./ancestry'));

var personObjByName = {};
ancestry.forEach(function(each) {
  personObjByName[each.name] = each;
});

var ageDiffArr = ancestry.filter(function(person) {
  return person.mother !== null && typeof personObjByName[person.mother] !== 'undefined';
}).map(function(person) {
  return person.born - personObjByName[person.mother].born;
});

function average(arr) {
  return (arr.reduce(function(sum, each) {
    return sum + each;
  }))/arr.length;
}
console.log(average(ageDiffArr));
console.log('');

function groupBy(arr, group) {
  var groups = {};
  arr.forEach(function(each) {
      var groupByName = group(each);
      if (!groups[groupByName]) {
        groups[groupByName] = [];
      }
      groups[groupByName].push(each);
  });
  return groups;
}

var centuryGroups = groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100);
});

for(var i in centuryGroups) {
  var sumOfAge = centuryGroups[i].map(function(person) {
    return person.died - person.born;
  });
  console.log(i + ': ' + average(sumOfAge));
}
console.log('');

function every(arr, check) {
  var temp = arr.filter(function(each) {
    return check(each);
  });
  if (arr.length === temp.length) return true;
  else return false;
}

function some(arr, check) {
  for(var i = 0; i < arr.length; i++) {
    if (check(arr[i])) return true;
  }
  return false;
}
console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));