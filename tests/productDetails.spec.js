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

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual(typeof productDetails('product1', 'product2'), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(productDetails('product1', 'product2').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof productDetails('product1', 'product2')[0], 'object');
    assert.deepStrictEqual(typeof productDetails('product1', 'product2')[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    const product1 = productDetails('product1', 'product2')[0];
    const product2 = productDetails('product1', 'product2')[1];
    assert.deepStrictEqual(product1 === product2, false);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const arr1 = product1.details.productId.split('');
    const arr2 = product1.details.productId.split('');
    const final1 = `${arr1[arr1.length - 3]}${arr1[arr1.length - 2]}${arr1[arr1.length - 1]}`;
    const final2 = `${arr2[arr2.length - 3]}${arr2[arr2.length - 2]}${arr2[arr2.length - 1]}`;
    assert.deepStrictEqual(final1 === '123' && final2 === '123', true);
  });
});
