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
function some(array) {
  let soma = null;
  array.forEach((e) => {
    soma += e;
  });
  return soma;
}

function hasString(array) {
  let exist = null;
  array.forEach((e) => {
    if (typeof e === 'string') exist = true;
  });
  return exist;
}

function hasZero(array) {
  let exist = null;
  array.forEach((e) => {
    if (e === 0) exist = true;
  });
  return exist;
}

const average = (array) => {
  let soma = some(array);
  if (array.length === 0 || hasString(array)) return undefined;
  if (hasZero(array)) return 0;

  return Math.round(soma / (array.length));
};

module.exports = average;
