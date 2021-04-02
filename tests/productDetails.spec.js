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

// Busquei orientação com o meu colega Leandro Reis para resolver o último teste, pois tive muita dificuldade nessa. Link:https://github.com/tryber/sd-010-b-project-js-unit-tests/pull/100/commits/fef9eb207b6dd220e7e736a0762be20dc591c86b;

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual(typeof productDetails('Alcool gel', 'Máscara'), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(productDetails().length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof Object.values(productDetails()), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(Object.values(productDetails('ex1', 'ex2'))[0].name, 'ex2');
    // (Difícil) Teste que os dois productIds terminam com 123.
    let key1 = productDetails('exemplo1', 'exemplo2')[0].details.productId.split('');
    let key2 = productDetails('exemplo1', 'exemplo2')[1].details.productId.split('');
    let arrKey1 = `${key1[key1.length - 3]}${key1[key1.length - 2]}${key1[key1.length - 1]}`;
    let arrKey2 = `${key2[key2.length - 3]}${key2[key2.length - 2]}${key2[key2.length - 1]}`;
    assert.deepStrictEqual(arrKey1 === '123' && arrKey2 === '123', true);
  });
});
