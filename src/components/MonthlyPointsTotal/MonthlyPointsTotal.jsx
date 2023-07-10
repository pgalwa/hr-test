import React from 'react';
import './style.css';

const MonthlyPointsTotal = ({ monthlyTotals }) => {
  return (
    <div className="monthly-points-total">
      <h2>Monthly Reward Points Total</h2>
      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Month</th>
            <th>Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {monthlyTotals.map((total, index) => (
            <tr key={index}>
              <td>{total.customerId}</td>
              <td>{total.month}</td>
              <td>{total.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyPointsTotal;
