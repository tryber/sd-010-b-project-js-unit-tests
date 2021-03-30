/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
const isEmpty = (numbers) => {
  let messege = null;
  if (numbers.length === 0) {
    messege = true;
  } else {
    messege = false;
  }
  return messege;
};

const isNumber = (numbers) => {
  let messege = true;
  for (let index in numbers) {
    if (typeof numbers[index] !== 'number') {
      messege = false;
    }
  }
  return messege;
};

const getAverage = (numbers) => {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return Math.round(sum / numbers.length);
};

const average = (numbers) => {
  let messege = null;
  if (isEmpty(numbers) || !isNumber(numbers)) {
    messege = undefined;
  } else {
    messege = getAverage(numbers);
  }
  return messege;
};

module.exports = average;
