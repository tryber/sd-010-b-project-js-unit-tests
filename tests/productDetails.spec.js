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
    const objects = productDetails('Alcool gel', 'Máscara');
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof objects, 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    const numbersItems = objects.length;
    assert.strictEqual(numbersItems, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const obj1 = objects[0];
    const obj2 = objects[1];
    assert.strictEqual(typeof obj1, 'object');
    assert.strictEqual(typeof obj2, 'object');
    // Teste que os dois objetos são diferentes entre si.
    let verify = false;
    if (obj1 !== objects[1]) {
      verify = true;
    }
    assert.strictEqual(verify, true);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const valueProductId0 = obj1.details.productId;
    const valueProductId1 = obj2.details.productId;
    // Código retirado no site: https://blog.education-ecosystem.com/javascript-como-verificar-se-uma-string-contem-outra-substring/#:~:text=O%20m%C3%A9todo%20indexOf%20()%20para,m%C3%A9todo%20retorna%20'%2D1'.
    const result0 = valueProductId0.indexOf('123') > -1;
    const result1 = valueProductId1.indexOf('123') > -1;
    let verifyCondition = false;
    if (result0 === true && result1 === true) {
      verifyCondition = true;
    }
    assert.strictEqual(verifyCondition, true);
  });
});
