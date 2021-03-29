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
    assert.strictEqual(Array.isArray(productDetails('iphone', 'celular')), true);

    assert.strictEqual(productDetails('iphone', 'celular').length, 2);

    assert.strictEqual(typeof productDetails('iphone', 'celular'), 'object');

    assert.notStrictEqual(
      productDetails('iphone', 'celular')[0],
      productDetails('iphone', 'celular')[1],
    );

    const product1 = productDetails('iphone', 'celular')[0].details.productId.slice(-3);

    const product2 = productDetails('iphone', 'celular')[1].details.productId.slice(-3);

    assert.strictEqual(product1, product2, '123');
  });
});
