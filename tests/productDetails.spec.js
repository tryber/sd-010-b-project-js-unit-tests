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
    assert.strictEqual(Array.isArray(productDetails('batata', 'cenoura')), true);
    assert.strictEqual(productDetails('batata', 'cenoura').length, 2);
    const products = productDetails('refri', 'cerveja');
    assert.strictEqual(typeof products[1], 'object');
    assert.strictEqual(typeof products[0], 'object');
    assert.notStrictEqual(products[0], products[1]);
    /* ultima parte desse request resolvida com o auxílio do código do meu colega Guilherme Lima, da Turma 10-b, para entender melhor o uso do details.productId. E da leitura da documentação da função endsWith no src: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith */
    const product1 = products[0].details.productId.endsWith('123');
    const product2 = products[1].details.productId.endsWith('123');
    assert.deepStrictEqual([product1, product2], [true, true]);
  });
});
