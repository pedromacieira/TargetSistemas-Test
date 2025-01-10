const revenueByState = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

const totalRevenue = Object.values(revenueByState).reduce((acc, value) => acc + value, 0);

for (const state in revenueByState) {
  const percentage = (revenueByState[state] / totalRevenue) * 100;
  console.log(`${state}: R$${revenueByState[state].toFixed(2)} - ${percentage.toFixed(2)}%`);
}
