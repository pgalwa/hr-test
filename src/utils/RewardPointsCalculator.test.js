import {calculateRewardPoints} from './RewardPointsCalculator';

test('calculates reward points correctly for different amounts', () => {
  console.log(calculateRewardPoints(80));
  expect(calculateRewardPoints(120)).toBe(90);
  expect(calculateRewardPoints(80)).toBe(30);
  expect(calculateRewardPoints(150)).toBe(150);
  // Add more test cases as needed
});
