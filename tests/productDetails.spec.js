/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/
const verifyAllProducts = (products) => {
  let cont = 0;
  for (let product of products) {
    if (typeof product === 'object') {
      cont += 1;
    }
  }
  let messege = null;
  if (cont === 2) {
    messege = true;
  } else {
    messege = false;
  }
  return messege;
};

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof productDetails('chocolate', 'bala'), 'object',
      'O retorno deveria ser um objeto');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('chocolate', 'bala').length, 2,
      'O valor retornado pela função deveria ter dois itens dentro.');
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const products = productDetails('chocolate', 'bala');
    assert.strictEqual(verifyAllProducts(products), true,
      'Todos os valores retornados deveriam ser objetos!');
    // Teste que os dois objetos são diferentes entre si.
    const getProduct = (indexProduct) => products[indexProduct];
    assert.notStrictEqual(getProduct(0), getProduct(1),
      'Erro! Todos os objetos em Java Script são diferentes entre si,'
      + 'por mais que suas chaves e valores sejam diferentes!');
    // (Difícil) Teste que os dois productIds terminam com 123.
    const getProductIdTermination = (index) => products[index].details.productId.substr(-3);
    assert.strictEqual(getProductIdTermination(0), getProductIdTermination(1),
      'Os produtos não terminal com o mesmo ID');
  });
});
