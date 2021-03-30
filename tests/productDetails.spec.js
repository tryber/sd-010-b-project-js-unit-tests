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
    assert.strictEqual(Array.isArray([productDetails]), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('', '').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails([0]), typeof productDetails([1]), Object);
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails([0]), productDetails([1]), true);
    // (Difícil) Teste que os dois productIds terminam com 123.
    // Com a ajuda do amigo Eder Paiva e Rafael Mathias.
    // const produto = productDetails('string', 'string');
    // const produtoPos1 = produto[0].details.productId;
    // const produtoPos2 = produto[1].details.productId;
    // const armazem = [produtoPos1.slice(-3), produtoPos2.slice(-3)];
    // assert.deepStrictEqual(armazem, ['123', '123']);
    const produto = productDetails('string', 'string');
    assert.deepStrictEqual(produto[0].details.productId.endsWith('123'),
      produto[1].details.productId.endsWith('123'), true);
  });
});
