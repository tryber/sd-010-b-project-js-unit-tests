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
    const products = productDetails('Álcool gel', 'Máscara');
    // Teste que o retorno da função é um array.
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    assert.strictEqual(Array.isArray(products), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(products.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof Object.keys(products), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.deepStrictEqual([typeof products[0], typeof products[1]], ['object', 'object']);
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.strictEqual(products[0].details.productId.endsWith('123'), true);
    assert.strictEqual(products[1].details.productId.endsWith('123'), true);
  });
});
