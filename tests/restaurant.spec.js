/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const createMenu = require('../src/restaurant');

/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.
  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. Eles guiarão você pelo desenvolvimento.
  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:
  const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).
  meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }
  meuRestaurante.order('coxinha') // Retorno: undefined
  meuRestaurante.consumption // Retorno: ['coxinha']
  meuRestaurante.pay() // Retorno: 3.9
  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:
  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });
  meuRestaurante.fetchMenu() // Retorno: Menu acima
  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']
  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.
  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.
  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A ORDEM INDICADA!
  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    const objetoRetornado = createMenu({ food: {}, drink: {} });

    // TESTE 1: Verifique se o retorno da função createMenu() é um objeto
    assert.strictEqual(typeof objetoRetornado, 'object');
    assert.strictEqual(typeof objetoRetornado.fetchMenu, 'function');
    assert.strictEqual(typeof objetoRetornado.order, 'function');
    assert.strictEqual(typeof objetoRetornado.pay, 'function');

    // TESTE 2: Verifique que 'objetoRetornado.fetchMenu()' retorna um objeto cujas chaves são somente `food` e `drink`.
    const arrayMenuItems = objetoRetornado.fetchMenu();
    assert.strictEqual(typeof arrayMenuItems, 'object');
    const menuKeys = Object.keys(arrayMenuItems);
    let verifyKeys = false;
    if (menuKeys[0] === 'food' && menuKeys[1] === ('drink')) {
      verifyKeys = true;
    }
    assert.strictEqual(verifyKeys, true);

    // TESTE 3: Verifique que o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
    assert.deepStrictEqual({ food: {}, drink: {} }, arrayMenuItems);

    // TESTE 4: Verifique que 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    const arrayLength = objetoRetornado.consumption;
    let verify2 = false;
    if (arrayLength.length === 0) {
      verify2 = true;
    }
    assert.strictEqual(typeof arrayLength, 'object');
    assert.strictEqual(verify2, true);

    // TESTE 5: Verifique que chamar uma função associada à chave `order`, tal string é adicionada ao array objetoRetornado.consumption
    objetoRetornado.order('coxinha');
    const valueConsumption = objetoRetornado.consumption;
    assert.deepStrictEqual(valueConsumption, ['coxinha']);

    // TESTE 6: Verifique que as três orders de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.
    objetoRetornado.order('sopa');
    objetoRetornado.order('sashimi');
    const valueConsumption2 = objetoRetornado.consumption;
    assert.deepStrictEqual(valueConsumption2, ['coxinha', 'sopa', 'sashimi']);

    // TESTE 7: Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    objetoRetornado.order('coxinha');
    objetoRetornado.order('agua');
    assert.deepStrictEqual(valueConsumption, ['coxinha', 'sopa', 'sashimi', 'coxinha', 'agua']);

    // TESTE 8: Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    const objetoRetornado2 = createMenu({ food: { coxinha: 3.9 }, drink: { agua: 3.9 } });
    objetoRetornado2.order('coxinha');
    objetoRetornado2.order('agua');
    objetoRetornado2.order('coxinha');
    const totalPay = objetoRetornado2.pay();
    assert.strictEqual(totalPay, 12.87);
  });
});
