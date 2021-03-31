/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const { type } = require('os');
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
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.strictEqual(typeof productDetails('Álcool', 'Gel'), 'object');
    assert.strictEqual(productDetails('teste1', 'teste2').length, 2);
    let produto = productDetails('teste1', 'teste2');
    assert.strictEqual(typeof produto[0], 'object');
    assert.strictEqual(typeof produto[1], 'object');
    assert.notDeepStrictEqual(produto[0], produto[1]);
    let fimProduto1 = produto[0].details.productId.endsWith('123');
    let fimProduto2 = produto[1].details.productId.endsWith('123');
    assert.deepStrictEqual([fimProduto1, fimProduto2], [true, true]);
  });
});
