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
    assert.deepStrictEqual(typeof productDetails(), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const iten1 = productDetails()[0];
    const iten2 = productDetails()[1];
    assert.strictEqual(typeof iten1, 'object');
    assert.strictEqual(typeof iten2, 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(iten1, iten2);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const iten1Name = iten1.name;
    const iten2Name = iten2.name;
    const iten1NoId = iten1.details.productId.split(iten1Name)[1];
    const iten2NoId = iten2.details.productId.split(iten2Name)[1];
    assert.strictEqual(iten1NoId && iten2NoId, iten1Name && iten2Name);
  });
});
