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
  let response = '';
  if (nome && idade) {
    response = `Oi, meu nome é ${nome}!`;
    response += `\nTenho ${idade} anos,`;
    response += '\ntrabalho na Trybe e mando muito em programação!';
    response += '\n#VQV!';
  } else {
    return undefined;
  }

  return response;
};

module.exports = vqv;
