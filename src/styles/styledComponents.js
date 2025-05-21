import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem;
`;

export const RewardSummaryContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fafafa;
  min-height: 100%;
  max-width: 600px;
`;


export const MonthFilterContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fafafa;
  min-height: 100%;
  max-width: 600px;
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

export const CustomerButtonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  // max-height: 1000px;
  overflow-y: auto;
  width: 180px;
`;


export const CustomerButton = styled.button`
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  width: 100%;
  text-align: left;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: ${({ selected }) => (selected ? '#4CAF50' : '#f9f9f9')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  cursor: ${({ selected }) => (selected ? 'default' : 'pointer')};
  pointer-events: ${({ selected }) => (selected ? 'none' : 'auto')};
  transition: all 0.3s ease;
  position: relative;
  box-shadow: ${({ selected }) =>
    selected ? '0 0 5px rgba(0, 128, 0, 0.6)' : 'none'};

  &:hover {
    background-color: ${({ selected }) => (selected ? '#4CAF50' : '#e0e0e0')};
    transform: ${({ selected }) => (selected ? 'none' : 'scale(1.02)')};
  }

  &::after {
    content: ${({ selected }) => (selected ? '"✔"' : '""')};
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1rem;
    color: white;
  }
`;


export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
`;

export const FilterSection = styled.div`
  margin-top: 1rem;
`;

export const Message = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #777;
  height: 300px;
`;
