function newForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

function newFill(array, value, start = 0, end = array.length - 1) {
  for (let i = start; i < end; i++) {
    array[i] = value;
  }
  return array;
}

function newMap(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

function newSome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      return true;
    }
  }

  return false;
}

function newFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
}

function newFindIndex(array, callback) {
  let result;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      result = i;
    }
  }
  return result;
}

function newEvery(array, callback) {
  let result;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result++;
    }
  }
  if (result === array.length) {
    return true;
  } else {
    return false;
  }
}

function newFilter(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

function newConcat(array, array1) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i]);
  }
  for (let j = 0; j < array.length; j++) {
    result.push(array1[j]);
  }
  return result;
}

function newIncludes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}

function newIndexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  }
}

function newJoin(array, separator) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result += array[i] + separator;
  }
  return result;
}

function newReduce(array, callback) {
  let result = 0;
  let acc = 0;
  for (let i = 0; i < array.length; i++) {
    result += callback(acc, array[i]);
    acc += result;
  }
  return result;
}

function newSlice(array, inicio = 0, fim = array.length) {}
