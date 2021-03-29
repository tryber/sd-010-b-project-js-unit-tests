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
    assert.strictEqual(typeof productDetails(), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails()[0], 'object');
    assert.strictEqual(typeof productDetails()[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    const object1 = productDetails('Alcool Gel', 'Mascara')[0];
    const object2 = productDetails('Alcool Gel', 'Mascara')[1];
    assert.notStrictEqual(object1, object2);
    // // (Difícil) Teste que os dois productIds terminam com 123.
    const productId = Object.values(object1.details)[0];
    const productId2 = Object.values(object2.details)[0];
    let arr = [];
    let arr2 = [];
    for (let word = productId.length - 3; word < productId.length; word += 1) {
      arr.push(productId[word]);
    }
    for (let word = productId2.length - 3; word < productId2.length; word += 1) {
      arr2.push(productId2[word]);
    }
    assert.deepStrictEqual(arr, ['1', '2', '3']);
    assert.deepStrictEqual(arr2, ['1', '2', '3']);
  });
});
