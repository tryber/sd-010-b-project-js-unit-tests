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
// fui auxiliado pelo colega Henrique Zózimo T10b para a execução da questão
describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    const product = productDetails('Alcool gel', 'Máscara');
    const um = product[0].details.productId.endsWith('123');
    const dois = product[1].details.productId.endsWith('123');
    // ESCREVA SEUS TESTES ABAIXO:
    assert.deepStrictEqual(Array.isArray(product), true);
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual(product.length, 2);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual([typeof product[0], typeof product[1]], ['object', 'object']);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.notDeepStrictEqual(product[0], product[1]);
    // Teste que os dois objetos são diferentes entre si.
    assert.deepStrictEqual([um, dois], [true, true]);
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
