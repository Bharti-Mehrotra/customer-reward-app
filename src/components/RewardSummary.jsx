import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { calculateRewardPoints } from '../utils/calculateRewards';
import { recentThreeMonthsTransactions } from '../utils/recentThreeMonthsTransactions';
import { RewardSummaryContainer } from './../styles/styledComponents';
import MonthFilter from './MonthFilter';

const RewardSummary = ({ transactions, selectedMonth, selectedYear, onMonthChange, onYearChange }) => {

  const summary = useMemo(() => {
    if (selectedMonth === 'Recent 3 Months') {
      const recentMonthTransactions = recentThreeMonthsTransactions(transactions);
      return calculateMonthlyRewardPoints(recentMonthTransactions)
    }
    const monthlyTransactions = transactions.filter(tx => { return (tx.date.startsWith(`${selectedYear}-${selectedMonth}`)) })
    return calculateMonthlyRewardPoints(monthlyTransactions)
  }, [transactions, selectedMonth, selectedYear]);

  function calculateMonthlyRewardPoints(transactions) {
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
    <RewardSummaryContainer>
      <MonthFilter
        month={selectedMonth}
        year={selectedYear}
        onMonthChange={onMonthChange}
        onYearChange={onYearChange}
      />
      <h2>Monthly Reward Summary</h2>
      <ul>
        {Object.entries(summary).map(([month, points]) => (
          <li key={month}>{month}: {points} points</li>
        ))}
      </ul>
      <p><strong>Total Points:</strong> {total}</p>
    </RewardSummaryContainer>
  );
};

RewardSummary.propTypes = {
  transactions: PropTypes.array.isRequired
};

export default RewardSummary;
