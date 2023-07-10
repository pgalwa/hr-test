import { calculateRewardPoints } from './RewardPointsCalculator';

export const calculateMonthlyPoints = (transactionData) => 
  transactionData.reduce((totals, transaction) => {
    const { customerId, amount, date } = transaction;
    const points = calculateRewardPoints(amount);
    const month = new Date(date).toLocaleString('default', { month: 'long', year: 'numeric' });
    
    const index = totals.findIndex((total) => total.customerId === customerId && total.month === month);
    if (index !== -1) {
      totals[index].points += points;
    } else {
      totals.push({ customerId, month, points });
    }

    return totals;
  }, []);