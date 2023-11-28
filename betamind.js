// refactored version
const convertToSortedUniqSeconds = (seconds_batches) => {
  return [].concat(...seconds_batches).filter((value, index, self)=> self.indexOf(value)===index).sort((a,b)=> a-b);
};

module.exports = {
  convertToSortedUniqSeconds
}
