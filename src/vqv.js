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
  if (!nome || !idade) return undefined;
  let nameMsg = `Oi, meu nome é ${nome}!\n`;
  let ageMsg = `Tenho ${idade} anos,\n`;
  let restOfMsg = 'trabalho na Trybe e mando muito em programação!\n#VQV!';
  const message = (nameMsg + ageMsg + restOfMsg);

  return message;
};

/*
console.log(vqv('Aladino Borges', 29));
console.log((vqv()));
console.log((vqv('', 30)));
*/

module.exports = vqv;
