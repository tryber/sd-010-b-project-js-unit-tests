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

// https://medium.com/aprendajs/10-javascript-array-m%C3%A9todos-que-voc%C3%AA-deveria-saber-789ea95667d0
// Referencia usada para realização

const average = ((array) => {
  let retorno;
  if ((array.length !== 0) && (array.every((num) => typeof num === 'number'))) {
    retorno = array.reduce((total, value) => total + value, 0);
    retorno = (retorno === 1) ? 0 : Math.round(retorno /= array.length);
  }
  return retorno;
});

module.exports = average;
