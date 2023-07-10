import React from 'react';
import './style.css';

const TransactionList = ({ transactionData }) => {
  return (
    <div className="transaction-list">
      <h2>Transaction List</h2>
      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactionData?.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.customerId}</td>
              <td>${transaction.amount}</td>
              <td>{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
