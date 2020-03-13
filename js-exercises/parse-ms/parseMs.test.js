import { parseMs } from './parseMs';

describe("parseMs", () => {});


describe('parseMs', () => {
  test('should return parsed object in various time components', () => {
    expect(parseMs(1337000001)).toEqual({
      days: 15,
      hours: 11,
      minutes: 23,
      seconds: 20,
      milliseconds: 1,
      microseconds: 0,
      nanoseconds: 0,
    });
  });
});
