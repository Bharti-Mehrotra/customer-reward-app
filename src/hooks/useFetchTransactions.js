import { useEffect, useState } from 'react';

const useFetchTransactions = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setTimeout(() => {
      if (Math.random() < 0.9) {
        fetch('http://localhost:3001/data')
         .then(res => res.json())
         .then(data => {
          console.log("data is ",data)
          setData(data)});
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
