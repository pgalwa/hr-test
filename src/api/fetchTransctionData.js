import {transactions} from './data';

export const fetchTransactionData = async () => {
  return new Promise((resolve) => setTimeout(resolve(transactions), 1000));
};