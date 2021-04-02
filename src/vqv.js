const vqv = (nome, idade) => {
  if (nome !== undefined && idade !== undefined) {
    return `Oi, meu nome é ${nome}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
  }
  return undefined;
};

module.exports = vqv;
