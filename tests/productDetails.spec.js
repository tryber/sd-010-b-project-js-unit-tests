/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const { isArray } = require('util');
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
    const functionTest = productDetails('Alcool gel', 'Mascara');
    const idZero = functionTest[0].details.productId;
    const idOne = functionTest[1].details.productId;
    const lenZfin = functionTest[0].details.productId.length - 3;
    const lenOfin = functionTest[1].details.productId.length - 3;
    const finish = () => (idZero.includes('123', lenZfin) === idOne.includes('123', lenOfin));
    // Break Row
    assert.strictEqual(Array.isArray(functionTest), true);
    // Teste que o retorno da função é um array.
    // Para resolver essa questão, utilizei como fonte de pesquisa o seguinte site: https://www.tutorialrepublic.com/faq/how-to-check-if-object-is-an-array-in-javascript.php#:~:text=Answer%3A%20Use%20the%20Array.,an%20array%3B%20otherwise%20returns%20false%20. , onde aprendi a verificar se um objeto é uma função.
    assert.strictEqual(functionTest.length, 2);
    // Teste que o array retornado pela função contém dois itens dentro.
    for (let index = 0; index < functionTest.length; index += 1) {
      assert.strictEqual(typeof functionTest[index], 'object');
    }
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(functionTest[0] !== functionTest[1], true);
    // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual(finish(), true);
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
