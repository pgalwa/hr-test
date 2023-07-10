import React from 'react';
import { render } from '@testing-library/react';
import MonthlyPointsTotal from './MonthlyPointsTotal';

test('renders monthly reward points total correctly', () => {
  const monthlyTotals = [
    { customerId: 1, month: 'June 2023', points: 120 },
    { customerId: 2, month: 'June 2023', points: 100 },
  ];

  const { getByText } = render(<MonthlyPointsTotal monthlyTotals={monthlyTotals} />);

  expect(getByText('Monthly Reward Points Total')).toBeInTheDocument();
  expect(getByText('Customer ID')).toBeInTheDocument();
  expect(getByText('Month')).toBeInTheDocument();
  expect(getByText('Reward Points')).toBeInTheDocument();
  expect(getByText('1')).toBeInTheDocument();
  expect(getByText('120')).toBeInTheDocument();
  expect(getByText('2')).toBeInTheDocument();
  expect(getByText('100')).toBeInTheDocument();
});
