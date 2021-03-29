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
    assert.strictEqual(Array.isArray(productDetails('Teste', 'Testando')), true);
    assert.strictEqual(productDetails('Teste', 'Testando').length, 2);
    assert.strictEqual(typeof productDetails('Teste', 'Testando')[0], 'object');
    assert.strictEqual(typeof productDetails('Teste', 'Testando')[1], 'object');
    const first = productDetails('Teste', 'Testando')[0];
    const sec = productDetails('Teste', 'Testando')[1];
    assert.strictEqual(first !== sec, true);
    const ultimo = productDetails('Teste', 'Testando');
    const um = ultimo[0].details.productId.split('e');
    assert.strictEqual(um[2], '123');
    const dois = ultimo[1].details.productId.split('o');
    assert.strictEqual(dois[1], '123');
  });
});
