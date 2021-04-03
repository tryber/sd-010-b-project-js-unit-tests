/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

/*
  Essa função verifica se uma variável foi definida
 */
const isDefinedVariable = (variable) => variable !== undefined;

/*
  Material consultado sobre arguments.length
  https://www.w3schools.com/js/js_function_parameters.asp
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/length
 */
const vqv = (nome, idade) => {
  // verifica se os parametros foram definidos
  if (isDefinedVariable(nome) && isDefinedVariable(idade)) {
    // retorna frase pre-definida como requisito
    return `Oi, meu nome é ${nome}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
  }
  return undefined; // retorna undefined caso algum parametro não foi definido
};

module.exports = vqv;
