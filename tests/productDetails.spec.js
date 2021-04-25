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
    // Teste que o retorno da função é um array.
    const typeProducts = productDetails('Alcoolgel', 'Máscara');
    assert.strictEqual(Array.isArray(typeProducts), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual((Object.keys(productDetails()).length), 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const output1 = productDetails('Alcoolgel', 'Máscara')[0];
    const output2 = productDetails('Alcoolgel', 'Máscara')[1];
    assert.deepStrictEqual([typeof output1, typeof output2], ['object', 'object']);
    // Teste que os dois objetos são diferentes entre si.
    const output = (output1 === output2);
    assert.strictEqual(output, false);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const outPutAlcool = (productDetails('Alcool gel', 'Máscara')[0].details.productId);
    const outPutMascara = (productDetails('Alcool gel', 'Máscara')[1].details.productId);
    const compare = [outPutAlcool.endsWith('123'), outPutMascara.endsWith('123')];
    assert.deepStrictEqual(compare, [true, true]);
  });
});
