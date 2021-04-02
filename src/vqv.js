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
// Só consegui resolver os erros no template literals com a ajuda do meu colega Alexandre Damasceno.  Link do PR:https://github.com/tryber/sd-010-b-project-js-unit-tests/pull/132/commits/4bee3d037361e7b219ca71e6a636e8fa9bf03966
const vqv = (nome, idade) => {
  if (typeof (nome) !== 'string' || typeof (idade) !== 'number') {
    return undefined;
  }
  const workMessage = 'trabalho na Trybe e mando muito em programação!\n';
  let joinSentences = `Oi, meu nome é ${nome}!\nTenho ${idade} anos,\n${workMessage}#VQV!`;
  return joinSentences;
};

module.exports = vqv;
