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
const add = (a, b) => a + b;
const mult = (a, b) => a * b;
// Consultei "https://stackoverflow.com/questions/4228356/how-do-i-perform-integer-division-and-separately-get-the-remainder-in-javascri" pra descobrir o math.floor
// Consultei "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor" pra entendê-lo
const div = (a, b) => Math.floor(a / b);
const sub = (a, b) => a - b;
const calculator = {
  add,
  mult,
  div,
  sub,
}; console.log(calculator.div(5, 2));

module.exports = calculator;
