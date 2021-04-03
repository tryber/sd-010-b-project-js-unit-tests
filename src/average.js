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

/*
  Essa função verifica se o argumento recebido é um número.
 */
const isNumber = (element) => typeof element === 'number';

/*
  Essa função verifica se o argumento recebido é um array de números.

  Material consultado sobre Array.isArray
  https://www.w3schools.com/jsref/jsref_isarray.asp
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

  Material consultado sobre every
  https://www.w3schools.com/jsref/jsref_every.asp
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every

  Material consultado sobre filter
  https://www.w3schools.com/jsref/jsref_filter.asp
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */
const isNumbersArray = (array) => {
  // verifica se array existe, não está vazio e todos os valores são números
  if (Array.isArray(array) && array.length && array.every(isNumber)) {
    return true;
  }
  return false; // retorna false caso não seja um array de números

  /* //verifica se o argumento recebido não é um array ou tem algum valor que não seja um número
  if (!Array.isArray(array) || !array.length || array.filter(isNotNumber).length > 0) {
    return false;
  }
  return true; // retorna true caso seja um array de números */
};

/*
  Foi utilizado o loop for...of para obter diretamente o valor de cada posição e como ele não será modificado dentro do loop, a variavel number foi declarada como const.

  Material consultado sobre o loop for...of
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of

  Material consultado sobre Math.round
  https://www.w3schools.com/jsref/jsref_round.asp
 */
const average = (array) => {
  if (isNumbersArray(array)) { // verifica se argumento recebido é array de números
    let sum = 0; // inicializa o somatorio sum com 0
    for (const number of array) { // para cada número em array
      sum += number; // incremente o somatorio com number
    }
    let avg = (sum / array.length); // calcula a média dos valores recebidos e armazena em avg
    return Math.round(avg); // arredonda a média para o inteiro mais próximo antes de retornar
  }
  return undefined; // retorna false caso argumento recebido não é array de números
};

module.exports = average;
