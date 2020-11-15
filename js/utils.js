function identity(value) {
  return value;
}

function last(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }
  return array[array.length - 1];
}

function first(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }
  return array[0];
}

/*
 * range(4); // => [0, 1, 2, 3]
 * range(-4); // => [0, -1, -2, -3]
 * range(1, 5); // => [1, 2, 3, 4]
 * range(0, 20, 5); // => [0, 5, 10, 15]
 * range(0, -4, -1); // => [0, -1, -2, -3]
 * range(1, 4, 0); // => [1, 1, 1]
 * range(0); // => []
 */
function range(start, end, step, isRight) {
  if (end == undefined) {
    end = start;
    start = 0;
  }
  if (end > 0 && step === undefined) {
    step = 1;
  }
  if (end <= 0 && step === undefined) {
    step = -1;
  }
  if (isRight === undefined) {
  }
  let result = [];

  if (step === 0) {
    while (result.length !== end - 1) {
      result.push(start);
    }
  }

  if (end > 0 && step !== 0) {
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
  }
  if (end < 0 && step !== 0) {
    for (let i = start; i > end; i += step) {
      result.push(i);
    }
  }
  if (isRight) {
    result = result.reverse();
  }
  return result;
}

/*
rangeRight(4); // => [3, 2, 1, 0]
rangeRight(-4); // => [-3, -2, -1, 0]
rangeRight(1, 5); // => [4, 3, 2, 1]
rangeRight(0, 20, 5); // => [15, 10, 5, 0]
rangeRight(0, -4, -1); // => [-3, -2, -1, 0]
rangeRight(1, 4, 0); // => [1, 1, 1]
rangeRight(0); // => []
*/
function rangeRight(start, end, step) {
  return range(start, end, step, true);
}

/*
isEmpty(null); // => true
isEmpty(true); // => true
isEmpty(1); // => true
isEmpty([1, 2, 3]); // => false
isEmpty({ 'a': 1 }); // => false
isEmpty('123'); // => false
isEmpty(123); // => true
isEmpty(''); // => true
isEmpty(0); // => true
*/
function isEmpty(value) {
  if (value === null) {
    return true;
  }
  if (value === undefined) {
    return true;
  }
  if (typeof value === "number") {
    return true;
  }
  if (typeof value === "bigint") {
    return true;
  }
  if (typeof value === "boolean") {
    return true;
  }
  if (typeof value === "string") {
    return value === "";
  }
  if (value instanceof Set) {
    return value.size === 0;
  }
  if (value instanceof Map) {
      return value.size ===0;
}
  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }

  return false;
}
// if (typeof value === 'array'){
// return value.length === 0;
// }
console.log(isEmpty(null));
console.log(isEmpty(true));
console.log(isEmpty(1));
console.log(isEmpty([1, 2, 3]));
console.log(isEmpty({ a: 1 }));
console.log(isEmpty("123"));
console.log(isEmpty(123));
console.log(isEmpty(""));
console.log(isEmpty(0));
console.log(isEmpty([]));
