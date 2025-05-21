import { getRecentThreeMonths } from "./recentThreeMonths";

export const recentThreeMonthsTransactions = (transactions) => {
  const recentMonths = getRecentThreeMonths();
  return transactions.filter(txn => {
    const txnMonth = txn.date.slice(0, 8); 
    return recentMonths.includes(txnMonth);
  });
}