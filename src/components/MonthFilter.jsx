import React from 'react';
import PropTypes from 'prop-types';
import { MonthFilterContainer } from '../styles/styledComponents';

const MonthFilter = ({ month, year, onMonthChange, onYearChange }) => {
  const months = ['Recent 3 Months', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const years = ['2020', '2021', '2022', '2023', '2024', '2025'];

  return (
    <div>
      <h2>Filter by Month & Year</h2>
      <select value={month} onChange={e => onMonthChange(e.target.value)}>
        {months.map(m => <option key={m} value={m}>{m}</option>)}
      </select>
      <select value={year} onChange={e => onYearChange(e.target.value)}>
        {years.map(y => <option key={y} value={y}>{y}</option>)}
      </select>
    </div>
  );
};

MonthFilter.propTypes = {
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  onMonthChange: PropTypes.func.isRequired,
  onYearChange: PropTypes.func.isRequired
};

export default MonthFilter;
