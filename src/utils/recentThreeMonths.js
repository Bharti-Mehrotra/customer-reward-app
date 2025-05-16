export const getRecentThreeMonths = () => {
  const months = [];
  const currentDate = new Date();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  for (let i = 0; i < 3; i++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
    const year = date.getFullYear();
    const month = monthNames[date.getMonth()];
    months.push(`${year}-${month}`);
  }

  return months;
}