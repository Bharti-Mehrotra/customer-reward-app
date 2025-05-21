import React from 'react';
import PropTypes from 'prop-types';
import { MonthFilterContainer } from '../styles/styledComponents';

const MonthFilter = ({ month, year, onMonthChange, onYearChange }) => {
  const months = ['Recent 3 Months', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 6 }, (_, i) => String(currentYear - i)).reverse();
  return (
    <MonthFilterContainer>
      <h2>Filter by Month & Year</h2>
      <div style={{ marginBottom: '1rem' }}>
        <label>Select Month:</label><br />
        <select value={month} onChange={e => onMonthChange(e.target.value)}>
          {months.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
      </div>
      <div>
        <label>Select Year:</label><br />
        <select value={year} onChange={e => onYearChange(e.target.value)}
        >
          {years.map(y =><option key={y} value={y}>{y}</option>)}
        </select>
      </div>
    </MonthFilterContainer>
  );
};

MonthFilter.propTypes = {
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  onMonthChange: PropTypes.func.isRequired,
  onYearChange: PropTypes.func.isRequired
};

export default MonthFilter;
