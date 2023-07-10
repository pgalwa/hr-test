const TWO_DOLLARS_PER_CENT = 100;
const ONE_DOLLARS_PER_CENT = 50;
const MAX_POINTS_PER_ONE_CENT = 50;

export const calculateRewardPoints = (amount) => {
  let rewardPoints = 0;
  if (amount > TWO_DOLLARS_PER_CENT) {
    rewardPoints += (amount - TWO_DOLLARS_PER_CENT) * 2;
  }
  if (amount > ONE_DOLLARS_PER_CENT && amount <= TWO_DOLLARS_PER_CENT) {
    rewardPoints += (amount - 50);
  }
  if (amount >= TWO_DOLLARS_PER_CENT) {
    rewardPoints += MAX_POINTS_PER_ONE_CENT;
  }
  return rewardPoints;
};