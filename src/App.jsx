import React, { useState, useMemo } from 'react';
import useFetchTransactions from './hooks/useFetchTransactions';
import CustomerList from './components/CustomerList';
import MonthFilter from './components/MonthFilter';
import RewardSummary from './components/RewardSummary';
import TransactionTable from './components/TransactionTable';
import { Container, Section, Title, Message } from './styles/styledComponents';
import { getRecentThreeMonths } from './utils/recentThreeMonths';

const App = () => {
  const { transactions, loading, error } = useFetchTransactions();
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('Recent 3 Months');
  const [selectedYear, setSelectedYear] = useState('2025');

  const customers = useMemo(() => {
    const unique = {};
    transactions.forEach(tx => unique[tx.customerId] = tx.customerName);
    return Object.entries(unique).map(([id, name]) => ({ id, name }));
  }, [transactions]);

  const filteredTransactions = useMemo(() => {
    const recentMonths = getRecentThreeMonths();
    return transactions.filter(tx => {
      if (selectedMonth === 'Recent 3 Months') {
        return ((!selectedCustomer || tx.customerId === selectedCustomer) &&
          recentMonths.includes(tx.date.slice(0, 8)))
      }
      else {
        return ((!selectedCustomer || tx.customerId === selectedCustomer) &&
          tx.date.startsWith(`${selectedYear}-${selectedMonth}`))
      }
    });
  }, [transactions, selectedCustomer, selectedMonth, selectedYear]);

  return (

    <Section>
      <Title>Customer Rewards Program</Title>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && customers.length ? (
        <Container>
          <CustomerList
            customers={customers}
            selectedCustomer={selectedCustomer}
            onSelect={setSelectedCustomer}
          />
          {selectedCustomer && customers ? (
            <div style={{ display: 'contents' }}>
              <RewardSummary
                transactions={transactions.filter(tx => tx.customerId === selectedCustomer)}
                selectedMonth={selectedMonth}
                selectedYear={selectedYear}
                onMonthChange={setSelectedMonth}
                onYearChange={setSelectedYear}
              />
              <TransactionTable
                transactions={filteredTransactions}
              />
            </div>
          )
            : (
              <Message>Please select a customer to view their rewards.</Message>
            )}
        </Container>
      )
        :
        (
          <Message>No Customers Available.</Message>
        )
      }
    </Section>
  );
};

export default App;