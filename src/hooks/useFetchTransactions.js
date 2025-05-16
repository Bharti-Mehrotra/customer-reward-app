import { useEffect, useState } from 'react';
import transactions from '../data/mockTransactions.json';

const useFetchTransactions = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setTimeout(() => {
      if (Math.random() < 0.9) {
        setData(transactions);
        setError('');
      } else {
        setError('Failed to fetch data');
      }
      setLoading(false);
    }, 1000);
  }, []);

  return { transactions: data, loading, error };
};

export default useFetchTransactions;
