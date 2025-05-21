import { useEffect, useState } from 'react';

const useFetchTransactions = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/data');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        if (!Array.isArray(result)) {
          throw new Error('Unexpected data format. Expected an array.');
        }
        setData(result);
        setError('');
      } catch (err) {
        console.error('Error fetching transactions:', err);
        setError(err.message || 'Something went wrong');
        setData([]);
      } finally {
        setLoading(false);
      }
    };
fetchData()
  }, []);

  return { transactions: data, loading, error };
};

export default useFetchTransactions;
