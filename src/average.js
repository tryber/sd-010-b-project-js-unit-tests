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

const average = (numbers) => {
  // Array Vazio
  if (numbers.length === 0) {
    console.log(`Tamanho do Array: ${numbers.lengt}`);
    return undefined;
  }

  // Conteúdo diferente de numérico
  for (let i = 0; i < numbers.length; i += 1) {
    if (typeof (numbers[i]) !== 'number') {
      console.log(typeof (numbers[i]));
      return undefined;
    }
  }

  let values = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    values += numbers[i];
  }
  console.log(`Somatório: ${values}`);
  const result = Math.round(values / numbers.length);

  console.log(`Average: ${result}`);

  return result;
};

const numbers = [-11, -5, 2];
const response = average(numbers);
console.log(`Resposta: ${response}`);

module.exports = average;
