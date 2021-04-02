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
// eu fiz esse requisito com a ajuda do meu colega Alexandre Damasceno.  Link do seu Pull request: https://github.com/tryber/sd-010-b-project-js-unit-tests/pull/132/commits/52457dd857c9e37eac7fea881b4de15e870399ee

const average = (array) => {
  let sum = 0;
  if (array.length === 0) {
    return undefined;
  } // length igual a 0 é uma forma de dizer que o array está vazio. Essa parte não pode estar dentro do FOR, senão dá problema.
  for (let index = 0; index < array.length; index += 1) {
    if (typeof (array[index]) !== 'number') {
      return undefined;
    }
    sum += array[index];
  }

  let calculateAverage = sum / array.length;
  return Math.round(calculateAverage); // aqui é pra arredondar a média.
};
console.log(average([4, 6, 14]));
module.exports = average;
