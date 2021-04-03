/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/
/*
  Material consultado sobre Math.floor
  https://www.w3schools.com/jsref/jsref_floor.asp
 */
const calculator = {
  // retorna a soma de integer1 e integer2
  add: (integer1, integer2) => integer1 + integer2,

  // retorna a multiplicação de integer1 por integer2
  mult: (integer1, integer2) => integer1 * integer2,

  div: (integer1, integer2) => {
    // dispara erro caso divisor (integer2) seja igual a zero
    if (integer2 === 0) throw new Error('parameter integer2 must not be 0');

    // realiza da divisão e armazena o resultado em result
    let result = integer1 / integer2;

    return Math.floor(result); // arredonda resultado para baixo
  },

  // retorna a subtração de integer1 por integer2
  sub: (integer1, integer2) => integer1 - integer2,
};

module.exports = calculator;
