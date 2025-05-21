import { useState, useMemo } from 'react';

const usePagination = (data = [], itemsPerPage = 2) => {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = Math.ceil(data.length / itemsPerPage);

  const currentData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }, [currentPage, data, itemsPerPage]);

  const next = () => setCurrentPage((page) => Math.min(page + 1, maxPage));
  const prev = () => setCurrentPage((page) => Math.max(page - 1, 1));
  return { currentData, currentPage, maxPage, next, prev };
};

export default usePagination;
