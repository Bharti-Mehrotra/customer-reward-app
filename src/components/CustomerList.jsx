import React from 'react';
import PropTypes from 'prop-types';
import { Section, Button, Title, CustomerButtonList, CustomerButton, Wrapper } from '../styles/styledComponents'
const CustomerList = ({ customers, selectedCustomer, onSelect }) => {
  return (

    <Section>
      <Title>Select Customer</Title>
      <Wrapper>
        <CustomerButtonList role='list'>
          {customers.map(customer => (
            <CustomerButton
            role='listitem'
              key={customer.id}
              onClick={() => onSelect(customer.id)}
              disabled={selectedCustomer === customer.id}
              selected={selectedCustomer === customer.id} 
            >
              {customer.name}
            </CustomerButton>
          ))}
        </CustomerButtonList>
      </Wrapper>

    </Section>
  );
};

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
  selectedCustomer: PropTypes.string,
  onSelect: PropTypes.func.isRequired
};

export default CustomerList;
