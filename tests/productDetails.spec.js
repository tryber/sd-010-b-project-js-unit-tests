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
    // créditos: https://pt.stackoverflow.com/questions/77190/como-saber-se-um-objeto-%C3%A9-um-array-em-javascript-sem-jquery#:~:text=O%20m%C3%A9todo%20Array.,e%20false%20se%20n%C3%A3o%20%C3%A9.&text=O%20typeof%20%C3%A9%20um%20Operador,o%20tipo%20de%20um%20Operando. && https://www.w3schools.com/nodejs/met_assert_ok.asp && https://www.w3schools.com/nodejs/met_assert_notstrictequal.asp

    assert.ok(Array.isArray(productDetails()));
    // Teste que o retorno da função é um array.

    assert.strictEqual(productDetails().length, 2);
    // Teste que o array retornado pela função contém dois itens dentro.

    assert.ok(productDetails().every((item) => typeof item === 'object'));
    // Teste que os dois itens dentro do array retornado pela função são objetos.

    const test = productDetails('product1', 'product2');
    assert.strictEqual(typeof test[0] === 'object' && typeof test[1] === 'object', true);
    // Teste que os dois objetos são diferentes entre si

    assert.strictEqual(test[0].details.productId.includes('123')
    && test[1].details.productId.includes('123'), true);
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
