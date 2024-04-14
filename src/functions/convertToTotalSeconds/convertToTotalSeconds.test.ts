import { convertToTotalSeconds } from './convertToTotalSeconds';

describe('convertToTotalSeconds', () => {
  test('should convert minutes and seconds to total seconds', () => {
    // Test case 1: Valid input
    expect(convertToTotalSeconds(2, 30)).toBe(150);

    // Test case 2: Only seconds provided
    expect(convertToTotalSeconds(0, 45)).toBe(45);

    // Test case 3: Only minutes provided
    expect(convertToTotalSeconds(3, 0)).toBe(180);

    // Test case 4: Edge case - zero minutes and zero seconds
    expect(convertToTotalSeconds(0, 0)).toBe(0);
  });

  test('should throw error for invalid input', () => {
    // Test case 5: NaN for minutes
    expect(() => {
      convertToTotalSeconds(NaN, 30);
    }).toThrow('Please enter a valid number');

    // Test case 6: NaN for seconds
    expect(() => {
      convertToTotalSeconds(2, NaN);
    }).toThrow('Please enter a valid number');

    // Test case 7: NaN for both minutes and seconds
    expect(() => {
      convertToTotalSeconds(NaN, NaN);
    }).toThrow('Please enter a valid number');
  });
});
