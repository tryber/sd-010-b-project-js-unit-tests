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
let productD = productDetails('Alcool gel', 'Máscara');

const expected = [
  {
    name: 'Alcool gel',
    details: {
      productId: 'Alcool gel123',
    },
  },
  {
    name: 'Máscara',
    details: {
      productId: 'Máscara123',
    },
  },
];

const compareObj = () => {
  let storeFunction = productD;

  return storeFunction[0] === storeFunction[1];
};

let productId1 = expected[0].details.productId;
let productId2 = expected[1].details.productId;
const parteString = (str1, str2) => {
  if (str1.substr(-3) === '123' && str2.substr(-3)) {
    return true;
  }
  return false;
};

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.strictEqual(Array.isArray(productD), true);
    assert.strictEqual(productD.length, 2);
    assert.strictEqual(typeof productD, 'object');
    assert.strictEqual(compareObj(), false);
    assert.strictEqual(parteString(productId1, productId2), true);
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.*
    // Teste que o array retornado pela função contém dois itens dentro.*
    // Teste que os dois itens dentro do array retornado pela função são objetos.*
    // Teste que os dois objetos são diferentes entre si.*
    // (Difícil) Teste que os dois productIds terminam com 123.*
  });
});
