import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
`;

export const Section = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

export const Select = styled.select`
  margin-right: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f4f4f4;
  }
`;

export const Button = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const Message = styled.p`
  font-style: italic;
  color: #666;
`;

