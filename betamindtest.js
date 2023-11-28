const convertToSortedUniqSeconds = (given) => {
  // 1 flatten the array 
  const flatArray = [].concat(...given);
  // 2 take unique only
  const uniqueArray = flatArray.filter((value, index, self) => {
return self.indexOf(value) === index;
  })
  // 3 sort array
  const sortedArray = uniqueArray.sort((a, b) => a-b);

  const resultArray = sortedArray;

return resultArray;
}

module.exports = {
  convertToSortedUniqSeconds
}
