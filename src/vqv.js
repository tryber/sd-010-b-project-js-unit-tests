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

const vqv = (nome, idade) => {
  const nameTryber = nome;
  const ageTryber = idade;

  // Referência utilizada para verificar se parâmetros não estão vazios: https://github.com/tryber/sd-010-b-project-js-unit-tests/blob/thiago-marchini-project-js-units-tests/src/vqv.js
  if (!nameTryber && !ageTryber) { return undefined; }
  return `Oi, meu nome é ${nameTryber}!
Tenho ${ageTryber} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
};

module.exports = vqv;
