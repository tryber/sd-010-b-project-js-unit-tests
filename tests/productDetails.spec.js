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
    const a = assert.strictEqual;
    const b = productDetails('teste', 'teste1');
    a(Array.isArray(productDetails('teste', 'teste')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    a(productDetails('teste', 'teste').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    a(typeof b[0] && typeof b[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    a(b[0] !== b[1], true);
    // (fácin) Teste que os dois productIds terminam com 123.
    b.forEach((value, index) => {
      // I know, I know... I should have used a forIn. Right?
      const c = b[index].details.productId.endsWith('123');
      a(c, true);
    });
  });
});
