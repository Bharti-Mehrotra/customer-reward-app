export const calculateRewardPoints = (amount) => {
  let points = 0;
  if (amount > 100) points += (amount - 100) * 2;
  if (amount > 50) points += Math.min(amount, 100) - 50;
  return Math.floor(points);
};