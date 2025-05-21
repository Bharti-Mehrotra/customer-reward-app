import { calculateRewardPoints } from '../calculateRewards';

describe('calculateRewardPoints', () => {
  test('should return 0 points for amount <= 50', () => {
    expect(calculateRewardPoints(50)).toBe(0);
    expect(calculateRewardPoints(0)).toBe(0);
  });

  test('should return correct points for amount between 51 and 100', () => {
    expect(calculateRewardPoints(60)).toBe(10);
    expect(calculateRewardPoints(100)).toBe(50); 
  });

  test('should return correct points for amount > 100', () => {
    expect(calculateRewardPoints(120)).toBe(90); 
    expect(calculateRewardPoints(130)).toBe(110); 
  });

  test('should handle fractional amounts correctly', () => {
    expect(calculateRewardPoints(99.99)).toBe(49); 
  });

  test('should return 0 for negative amounts', () => {
    expect(calculateRewardPoints(-20)).toBe(0);
    expect(calculateRewardPoints(-100)).toBe(0);
  });

  test('should return 0 for non-numeric input (NaN)', () => {
    expect(calculateRewardPoints(NaN)).toBe(0);
  });

  test('should return 0 for null or undefined input', () => {
    expect(calculateRewardPoints(null)).toBe(0);
    expect(calculateRewardPoints(undefined)).toBe(0);
  });

  test('should return 0 for string input', () => {
    expect(calculateRewardPoints('')).toBe(0);
    expect(calculateRewardPoints('abc')).toBe(0);
  });
});
