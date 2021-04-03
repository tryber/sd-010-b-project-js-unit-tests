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
  let frase;
  let texto = 'trabalho na Trybe e mando muito em programação!';
  if (typeof (nome) !== 'string' || typeof (idade) !== 'number') {
    frase = undefined;
  } else {
    frase = `Oi, meu nome é ${nome}!\nTenho ${idade} anos,\n${texto}\n#VQV!`;
  }
  return frase;
};

module.exports = vqv;
