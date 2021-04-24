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
  prod // Retorna:
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
    const prod = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(Array.isArray(productDetails()), true);
    assert.strictEqual(prod.length, 2);
    assert.strictEqual(typeof prod[0], 'object');
    assert.notStrictEqual(prod[0], prod[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.strictEqual(prod[0].details.productId.endsWith(123), true);
    assert.strictEqual(prod[1].details.productId.endsWith(123), true);
  });
});
