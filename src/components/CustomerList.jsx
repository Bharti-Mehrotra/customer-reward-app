import React from 'react';
import PropTypes from 'prop-types';

const CustomerList = ({ customers, selectedCustomer, onSelect }) => {
  return (
    <div>
      <h2>Select Customer</h2>
      <select value={selectedCustomer || ''} onChange={e => onSelect(e.target.value)}>
        <option value='' disabled>Select...</option>
        {customers.map(c => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
    </div>
  );
};

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
  selectedCustomer: PropTypes.string,
  onSelect: PropTypes.func.isRequired
};

export default CustomerList;
