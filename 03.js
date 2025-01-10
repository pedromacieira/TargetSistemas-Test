const data = {
  "billing": [
    { "day": 1, "value": 1000 },
    { "day": 2, "value": 1200 },
    { "day": 3, "value": 900 },
    { "day": 4, "value": 1100 },
    { "day": 5, "value": 1150 },
    { "day": 6, "value": 1300 },
    { "day": 7, "value": 1250 },
    { "day": 8, "value": 900 },
    { "day": 9, "value": 1050 },
    { "day": 10, "value": 950 }
  ]
};

function calculateBilling(billing) {
  const values = billing.map(day => day.value);

  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);

  const sumValues = values.reduce((acc, val) => acc + val, 0);
  const monthlyAverage = sumValues / values.length;

  const daysAboveAverage = values.filter(value => value > monthlyAverage).length;

  return {
    minValue,
    maxValue,
    monthlyAverage,
    daysAboveAverage
  };
}

const result = calculateBilling(data.billing);
console.log(`Minimum billing value: R$${result.minValue.toFixed(2)}`);
console.log(`Maximum billing value: R$${result.maxValue.toFixed(2)}`);
console.log(`Monthly average: R$${result.monthlyAverage.toFixed(2)}`);
console.log(`Number of days with billing above the average: ${result.daysAboveAverage}`);
