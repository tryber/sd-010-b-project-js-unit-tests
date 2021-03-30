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
    const itens = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(Array.isArray(itens), true);
    assert.strictEqual(itens.length, 2);
    assert.strictEqual(typeof itens[0], typeof itens[1], ['object', 'object']);
    assert.notStrictEqual(itens[0], itens[1]);
    assert.strictEqual(itens[0].details.productId
      .substr(-3), itens[0].details.productId
      .substr(-3), [123, 123]);
  });
});
