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
    assert.strictEqual(Array.isArray(productDetails()), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof productDetails(), 'object');
    // Teste que os dois objetos são diferentes entre si.
    const produto1 = productDetails('produto1', 'produto2')[0];
    const produto2 = productDetails('produto1', 'produto2')[1];
    assert.deepStrictEqual(produto1 !== produto2, true);
    // (Difícil) Teste que os dois productIds terminam com 123.
    /* referencia https://pt.stackoverflow.com/questions/146056/como-verificar-se-no-final-da-string-é-um-ou-zero ( procurei no Google, confirmar o final de uma string,
    achei essa maneira mais facil, procurei mais informações sobre no https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) */
    const produto1123 = produto1.details.productId;
    const produto2123 = produto2.details.productId;
    assert.deepStrictEqual(produto1123.endsWith('123'), produto2123.endsWith('123'), true, true);
  });
});
