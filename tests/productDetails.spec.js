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
    // ESCREVA SEUS TESTES ABAIXO:
    const productTeste = productDetails('Alcool gel', 'Máscara');
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual(Array.isArray(productTeste), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productTeste.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productTeste[1], 'object');
    assert.strictEqual(typeof productTeste[0], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productTeste[1], productTeste[0]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const finder123 = /123$/;
    assert.deepStrictEqual(finder123.test(productTeste[1].details.productId), true);
    assert.deepStrictEqual(finder123.test(productTeste[0].details.productId), true);
  });
});
