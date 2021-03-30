/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const myCounter = require('../src/myCounter');
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
    // exercicio resolvido com ajuda de colegas
    // array.isarray utilizado depois de ajuda recebida no plantão dos colegas de turma.
    const testes = productDetails('item1, item2');
    assert.strictEqual(Array.isArray(testes), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(testes.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof testes[0] && typeof testes[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(testes[0], testes[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    let item1 = testes[0].details.productId.slice(-3);
    let item2 = testes[1].details.productId.slice(-3);
    assert.strictEqual(item1 && item2, '123');
  });
});
