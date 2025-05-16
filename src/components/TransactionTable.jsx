import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { calculateRewardPoints } from '../utils/calculateRewards';

const TransactionTable = ({ transactions }) => {
  const itemsPerPage = 2;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const paginated = transactions.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div>
      <h2>Transaction Details</h2>
      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <>
          <table border="1" cellPadding="8">
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount ($)</th>
                <th>Reward Points</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map(tx => (
                <tr key={tx.transactionId}>
                  <td>{tx.date}</td>
                  <td>{tx.amount}</td>
                  <td>{calculateRewardPoints(tx.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            Page: {page} / {totalPages}
            <button onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page === 1}>Prev</button>
            <button onClick={() => setPage(p => Math.min(p + 1, totalPages))} disabled={page === totalPages}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

TransactionTable.propTypes = {
  transactions: PropTypes.array.isRequired
};

export default TransactionTable;
