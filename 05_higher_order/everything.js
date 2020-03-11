function every_for(array, test) {
  for (const i of array) {
    if (test(i)) continue;
    else return false;
  }
  return true;
}

function every_some(array, test) {
  return !array.some(x => !test(x))
}

console.log(every_for([1, 3, 5], n => n < 10));
// → true
console.log(every_for([2, 4, 16], n => n < 10));
// → false
console.log(every_for([], n => n < 10));
// → true
console.log('-'.repeat(5));
console.log(every_some([1, 3, 5], n => n < 10));
// → true
console.log(every_some([2, 4, 16], n => n < 10));
// → false
console.log(every_some([], n => n < 10));
// → true