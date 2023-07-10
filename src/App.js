import React, {useState, useEffect} from'react';
import { fetchTransactionData } from './api/fetchTransctionData';
import { calculateMonthlyPoints } from './utils/CalculateMonthlyPoints';
import TransactionList from './components/TransactionList/TransactionList';
import MonthlyPointsTotal from './components/MonthlyPointsTotal/MonthlyPointsTotal';
import './App.css';

function App() {

  const [transactionData, setTransactionData] = useState([]);
  const [monthlyTotals, setMonthlyTotals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTrasactionData = async () => {
      try {
        const data = await fetchTransactionData();
        setTransactionData(data);
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        alert(error);
      }
    };
    getTrasactionData();
  }, []);

  useEffect(() => {
    const calculateMonthlyPointsTotal = () => {
      const monthlyPoints = calculateMonthlyPoints(transactionData);
      setMonthlyTotals(monthlyPoints);
    };
    calculateMonthlyPointsTotal();
  }, [transactionData]);


  return (
    <div className="app">
      {isLoading ? (
        <div className="spinner">Loading...</div>
      ) : (<>
        <TransactionList transactionData={transactionData} />
        <MonthlyPointsTotal monthlyTotals={monthlyTotals} />
      </>
      )}
      
    </div>
  );
}

export default App;
