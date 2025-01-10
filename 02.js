const readline = require('readline');

function isFibonacci(number) {
  let a = 0, b = 1;

  while (b <= number) {
      if (b === number) {
          return `${number} pertence à sequência de Fibonacci.`;
      }
      [a, b] = [b, a + b];
  }

  return `${number} não pertence à sequência de Fibonacci.`;
}


const numero = 21;
console.log(isFibonacci(numero));