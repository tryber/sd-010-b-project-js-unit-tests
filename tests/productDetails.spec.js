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

    assert.strictEqual(Array.isArray(productDetails('alcool', 'luva')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual((Object.keys(productDetails('Alcool', 'luva')).length), 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof (Object.entries(productDetails('Alcool', 'luva'))[0]), 'object');
    assert.strictEqual(typeof (Object.entries(productDetails('Alcool', 'luva'))[1]), 'object');
    // Teste que os dois objetos são diferentes entre si.
    const produto0 = Object.getOwnPropertyNames(productDetails('Alcool', 'luva'))[0];
    const produto1 = Object.getOwnPropertyNames(productDetails('Alcool', 'luva'))[1];
    assert.deepStrictEqual(produto0 !== produto1, true);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const prod0 = productDetails('gel', 'gz')[0];
    const pro0De = prod0.details.productId;
    const proId0 = pro0De.substr((productDetails('gel', 'gz')[0].details.productId.length - 3), 3);
    const prod1 = productDetails('gel', 'gz')[0];
    const pro1De = prod1.details.productId;
    const proId1 = pro1De.substr((productDetails('gel', 'gz')[0].details.productId.length - 3), 3);
    assert.strictEqual(proId0, '123');
    assert.strictEqual(proId1, '123');
  });
});
