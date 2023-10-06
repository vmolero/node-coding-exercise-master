function cleanArrayDuplicates(array, keyName = "key") {
  if (!array) {
    return undefined;
  }
  if (array.length === 0) {
    return [];
  }
  return removeDuplicatesByKeyName(array, keyName);
}

function removeDuplicatesByKeyName(objects, keyName = "key", collection = []) {
  if (!objects || objects.length === 0) {
    return collection;
  }
  const first = objects.shift();

  const existing = collection.find((item) => item[keyName] === first[keyName]);
  if (!existing) {
    collection.push(first);
  }
  return removeDuplicatesByKeyName(objects, "key", collection);
}

module.exports = {
  removeDuplicatesByKeyName,
  cleanArrayDuplicates,
};
