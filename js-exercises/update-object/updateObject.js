
function updateObject(indexParam, replacementCharacter, inputArray) {
  let index = indexParam;
  if (index >= inputArray.length) {
    return -1;
  }
  if (index < 0) {
    index = inputArray.length + index;
  }
  let outputArray = inputArray;
  outputArray[index] = replacementCharacter;
  return outputArray;
}

export {
  updateObject,
};
