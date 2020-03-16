// adapted version.
function isEveryElementInteger(array) {
  return array.every(element => {
    if (element === Infinity || element === -Infinity) {
      return true;
    }
    element = parseInt(element);
    return !Number.isNaN(element);
  });
}

const arrayCubeRootToJson = array => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected array, received ${typeof array}');
  }
  if (!isEveryElementInteger(array)) {
    throw new TypeError('Array not completely comprised of integers.');
  }

  const resultantObject = {};
  for (const number of array) {
    const cubeRoot = Math.cbrt(number);
    resultantObject[number] = cubeRoot;
  }
  return resultantObject;
};

export { arrayCubeRootToJson };
