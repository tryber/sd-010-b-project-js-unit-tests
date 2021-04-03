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
/*
  Essa função verifica se o argumento recebido é um objeto.

  Material consultado sobre como diferenciar object dos demais tipos
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/ToString
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 */
const isObject = (element) => toString.call(element) === '[object Object]';

/*
  Essa função verifica se productId do elemento termina com '123'

  Material consultado sobre endsWith
  https://www.w3schools.com/jsref/jsref_endswith.asp
 */
const endOfProductCode = (element) => element.details.productId.endsWith('123');

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    const product1 = productDetails('Alcool gel', 'Máscara');
    // Teste que o retorno da função é um array.
    assert.ok(Array.isArray(product1));

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(product1.length, 2);

    /*
      Material consultado sobre every
      https://www.w3schools.com/jsref/jsref_every.asp
      https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every
     */
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.ok(product1.every(isObject));

    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(product1[0], product1[1]);

    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.ok(product1.every(endOfProductCode));
  });
});
