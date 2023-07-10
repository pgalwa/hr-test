import React from 'react';
import { render } from '@testing-library/react';
import TransactionList from './TransactionList';

test('renders transaction list correctly', () => {
  const transactions = [
    { customerId: 1, amount: 120, rewardPoints: 90, date: '2023-06-01' },
    { customerId: 1, amount: 80, rewardPoints: 30, date: '2023-06-15' },
  ];

  const { getByText } = render(<TransactionList transactions={transactions} />);

  expect(getByText('Transaction List')).toBeInTheDocument();
  expect(getByText('Customer ID')).toBeInTheDocument();
  expect(getByText('Amount')).toBeInTheDocument();
  expect(getByText('Date')).toBeInTheDocument();
  expect(getByText('$120')).toBeInTheDocument();
  expect(getByText('2023-06-01')).toBeInTheDocument();
  expect(getByText('$80')).toBeInTheDocument();
  expect(getByText('2023-06-15')).toBeInTheDocument();
});