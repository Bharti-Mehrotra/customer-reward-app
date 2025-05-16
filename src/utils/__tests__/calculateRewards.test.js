import { calculateRewardPoints } from '../calculateRewards';

describe('calculateRewardPoints', () => {
  test('returns 0 points for amounts <= 50', () => {
    expect(calculateRewardPoints(50)).toBe(0);
    expect(calculateRewardPoints(30)).toBe(0);
  });

  test('returns 1 point per dollar between $50 and $100', () => {
    expect(calculateRewardPoints(70)).toBe(20); // 70 => (70 - 50) * 1 = 20
    expect(calculateRewardPoints(100)).toBe(50); // (100 - 50) * 1 = 50
  });

  test('returns 2 points per dollar over $100 plus 1 point per dollar between $50-$100', () => {
    expect(calculateRewardPoints(120)).toBe(90); 
    // (120 - 100) * 2 = 40, (100 - 50) * 1 = 50 → 90 total
    expect(calculateRewardPoints(130)).toBe(110); 
    // (130 - 100) * 2 = 60, (100 - 50) * 1 = 50 → 110 total
  });

  test('returns floor of total points if not a whole number', () => {
    expect(calculateRewardPoints(120.5)).toBe(90); 
    // Should still return whole number (points are floored)
  });
});
