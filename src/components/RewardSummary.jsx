import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { calculateRewardPoints } from '../utils/calculateRewards';
import { recentThreeMonthsTransactions } from '../utils/recentThreeMonthsTransactions';

const RewardSummary = ({ transactions, selectedMonth, selectedYear }) => {
  const summary = useMemo(() => {
    
    // console.log("monthly transactions",transactions,selectedMonth,selectedYear)
    if(selectedMonth === 'Recent 3 Months'){
      const recentMonthTransactions = recentThreeMonthsTransactions(transactions);
      return monthlyPoints(recentMonthTransactions)
    }
    const monthlyTransactions = transactions.filter(tx=>{return (tx.date.startsWith(`${selectedYear}-${selectedMonth}`))})
    return monthlyPoints(monthlyTransactions)
  }, [transactions,selectedMonth, selectedYear]);

  function monthlyPoints(transactions) {
    const map = {}
    transactions.forEach(tx => {
      const [year, month] = tx.date.split('-'); //[2025,jan]
      const key = `${year}-${month}`; // key = '2025-jan
      const points = calculateRewardPoints(tx.amount); // 100
      if (!map[key]) map[key] = 0; // map{'2025-jan' : 0, '}
      map[key] += points;
    });
    return map;
  }


  const total = Object.values(summary).reduce((sum, pts) => sum + pts, 0);

  return (
    <div>
      <h2>Monthly Reward Summary</h2>
      <ul>
        {Object.entries(summary).map(([month, points]) => (
          <li key={month}>{month}: {points} points</li>
        ))}
      </ul>
      <p><strong>Total Points:</strong> {total}</p>
    </div>
  );
};

RewardSummary.propTypes = {
  transactions: PropTypes.array.isRequired
};

export default RewardSummary;
