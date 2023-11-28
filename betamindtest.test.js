const { convertToSortedUniqSeconds } = require('./betamind.js');

describe('Convert array to sorted_uniq_seconds', ()=> {
  it('should convert seconds_batches to sorted_uniq_seconds', () => { //start1
  const seconds_batches = [
      [1, 2, 3, 4],
      [1, 2, 3, 4, 5, 6, 7],
      [30, 31, 32, 33],
      [1, 2, 3, 32, 33, 34, 35, 36, 37, 38, 39, 49],
    ];

    const expectedSortedUniqSeconds
      = [1, 2, 3, 4, 5, 6, 7, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 49];

    const result = convertToSortedUniqSeconds(seconds_batches);

    expect(result).toEqual(expectedSortedUniqSeconds);
  }); // end1
}); 
