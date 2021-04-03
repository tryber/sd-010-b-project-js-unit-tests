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
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof (productDetails('blabla', 'blublu')), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(Object.keys(productDetails('blabla', 'blublu')).length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof (Object.keys(productDetails('blabla', 'blublu')[0])), 'object');
    assert.strictEqual(typeof (Object.keys(productDetails('blabla', 'blublu')[1])), 'object');
    // Teste que os dois objetos são diferentes entre si.
    let ar = productDetails('blabla', 'blabla');
    assert.notDeepStrictEqual(Object.keys(ar)[0], Object.keys(ar)[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    let ar2 = [];
    ar2[0] = productDetails('blabla', 'blublu')[0].details.productId.endsWith('123');
    ar2[1] = productDetails('blabla', 'blublu')[1].details.productId.endsWith('123');
    assert.strictEqual(ar2[0], true);
    assert.strictEqual(ar2[1], true);
  });
});
