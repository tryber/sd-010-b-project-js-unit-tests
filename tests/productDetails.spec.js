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
    // Teste que o retorno da função é um array.
    const o = Object.keys;
    const object1 = typeof o(productDetails('j', 'a')[0]);
    const object2 = typeof o(productDetails('j', 'a')[1]);
    assert.strictEqual(typeof productDetails('j', 'a'), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(Object.keys(productDetails('j', 'a')).length, 2);
    // Teste que os dois itens dentro do array
    assert.strictEqual(object1 && object2, 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual(productDetails('j', 'a')[0] === productDetails('j', 'a')[1], false);
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
