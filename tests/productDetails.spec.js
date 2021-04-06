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
    const callTest = productDetails('produto1', 'produto2');
    const product1Id = callTest[0].details.productId;
    const product2Id = callTest[1].details.productId;
    const returnLast3Digits = (arr) => {
      let lastDigits = [];
      for (let i = 3; i > 0; i -= 1) {
        lastDigits.push(arr[arr.length - i]);
      }
      return lastDigits;
    };
    const product1IdEnding = returnLast3Digits(product1Id);
    const product2IdEnding = returnLast3Digits(product2Id);

    // ESCREVA SEUS TESTES ABAIXO:
    // Utilizei o Array.isArray depois de consulta o site TutorialRepublic
    assert.strictEqual(Array.isArray(callTest), true);
    assert.deepStrictEqual(callTest.length, 2);
    assert.strictEqual(typeof callTest[0], 'object');
    assert.strictEqual(typeof callTest[1], 'object');
    assert.notStrictEqual(callTest[0], callTest[1]);
    assert.deepStrictEqual(product1IdEnding, ['1', '2', '3']);
    assert.deepStrictEqual(product2IdEnding, ['1', '2', '3']);
  });
});
