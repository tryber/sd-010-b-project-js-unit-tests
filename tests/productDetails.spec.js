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
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual(productDetails('name1', 'name2'), [
      { name: 'name1', details: { productId: 'name1123' } },
      { name: 'name2', details: { productId: 'name2123' } },
    ]);
    assert.deepStrictEqual(typeof productDetails('name1', 'name2'), 'object');
    assert.deepStrictEqual(productDetails('name1', 'name2').length, 2);
    assert.deepStrictEqual(productDetails('name1', 'name2')[0].name, 'name1');
    assert.deepStrictEqual(productDetails('name1', 'name2')[1].name, 'name2');
    assert.deepStrictEqual(
      productDetails('name1', 'name2')[0].details.productId.substring(
        productDetails('name1', 'name2')[0].details.productId.length - 3,
      ),
      '123',
    );
    assert.deepStrictEqual(
      productDetails('name1', 'name2')[0].details.productId.substring(
        productDetails('name1', 'name2')[1].details.productId.length - 3,
      ),
      '123',
    );
  });
});
