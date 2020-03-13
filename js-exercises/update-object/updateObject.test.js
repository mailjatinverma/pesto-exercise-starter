// import { TestScheduler } from 'jest';
import { updateObject } from './updateObject';

describe('updateObject', () => {
  test('should return updated object as per given replacement at the provided index of input array', () => {
    expect(updateObject(3, '_', ['a', 'b', 'c'])).toEqual(-1);
    expect(updateObject(1, '_', ['a', 'b', 'c'])).toEqual(['a', '_', 'c']);
    expect(updateObject(-1, '_', ['a', 'b', 'c'])).toEqual(['a', 'b', '_']);
    expect(updateObject(-1, 'a', ['b', 'c'])).toEqual(['b', 'a']);
    expect(updateObject(0, 'a', ['b', 'c'])).toEqual(['a', 'c']);
    expect(updateObject(1, 'a', ['b', 'c'])).toEqual(['b', 'a']);

  });
});
