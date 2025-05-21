import React from 'react';
import PropTypes from 'prop-types';
import usePagination from '../hooks/usePagination';
import { Message } from '../styles/styledComponents';
import { calculateRewardPoints } from '../utils/calculateRewards';

const TransactionTable = ({ transactions }) => {
  const { currentData, currentPage, maxPage, next, prev } = usePagination(transactions, 2);

  if (!Array.isArray(transactions)) {
    return <p>Error: Invalid transaction data</p>;
  }

  return (
    <div>
      <h2>Transaction Details</h2>
      {currentData.length === 0 ? (
        <Message>No transactions available.</Message>
      ) : (
        <div>
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Date</th>
                <th>Amount ($)</th>
                <th>Reward Points</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map(tx => (
              <tr key={tx.transactionId}>
                <td>{tx.date}</td>
                <td>{tx.amount}</td>
                <td>{calculateRewardPoints(tx.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: '1rem' }}>
        <button onClick={prev} disabled={currentPage === 1}>Prev</button>
        <span style={{ margin: '0 1rem' }}>Page {currentPage} of {maxPage}</span>
        <button onClick={next} disabled={currentPage === maxPage}>Next</button>        
      </div>
        </div>
      )
      }
      
    </div>
  );
};

TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    customerName: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    points: PropTypes.number.isRequired,
  })).isRequired,
};

export default TransactionTable;
