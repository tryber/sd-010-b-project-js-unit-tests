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
    // TESTE 1: Verifique se o retorno da função createMenu() é um objeto que possui,
    // mas não é necessariamente é limitado à chave `fetchMenu`, a qual tem como valor uma função.
    // ```
    // const objetoRetornado = createMenu(); // Retorno: { fetchMenu: () => {}, ... }
    // ```
    const objectReturned1 = createMenu();

    /*
      Material consultado sobre como diferenciar object dos demais tipos
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/ToString
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
    */
    // verifica se objetoRetornado é um Object
    assert.strictEqual(toString.call(objectReturned1), '[object Object]');

    // verifica se a chave 'fetchMenu' existe no objeto retornado
    assert.ok(Object.keys(objectReturned1).includes('fetchMenu'));

    // verifica se o valor de objectReturned1.fetchMenu é 'function'
    assert.strictEqual(typeof objectReturned1.fetchMenu, 'function');

    // TESTE 2: Verifique que, dado que a função createMenu foi chamada com o objeto: `{ food: {}, drink: {} }`,
    // verifique que 'objetoRetornado.fetchMenu()' retorna um objeto cujas chaves são somente `food` e `drink`.
    // ```
    // const objetoRetornado = createMenu({ food: {}, drink: {} });
    // objetoRetornado.fetchMenu() // Retorno: { food: {}, drink: {}}
    // ```
    const objectReturned2 = createMenu({ food: {}, drink: {} });
    const objReturned2FetchMenu = objectReturned2.fetchMenu();

    // verifica se objectReturned2.fetchMenu() é um Object
    assert.strictEqual(toString.call(objReturned2FetchMenu), '[object Object]');

    // verifica se as chaves de objectReturned2.fetchMenu() são somente `food` e `drink`
    assert.deepStrictEqual(Object.keys(objReturned2FetchMenu), [
      'food',
      'drink',
    ]);

    // TESTE 3: Verifique que o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.fetchMenu() // Retorno: objetoQualquer
    // ```
    const objectInputed = {
      food: { coxinha: 3.9, sanduiche: 9.9 },
      drinks: { agua: 3.9, cerveja: 6.9 },
    };

    const objectReturned3 = createMenu(objectInputed);

    // verifica se o objeto recuperado pela função 'objetoRetornado.fetchMenu' e objectInputed são iguais
    assert.deepStrictEqual(objectReturned3.fetchMenu(), objectInputed);

    // Agora faça o PASSO 1 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 4: Verifique que 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.consumption // Retorno: []

    // verifica se a chave 'consumption' existe no objeto retornado
    assert.ok(Object.keys(objectReturned3).includes('consumption'));

    // verifica se o valor da chave 'consumption' é um array vazio
    assert.deepStrictEqual(objectReturned3.consumption, []);

    // ```
    // Agora faça o PASSO 2 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 5: Verifique que chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro,
    // como `objetoRetornado.order('coxinha')`, tal string é adicionada ao array retornado em `objetoRetornado.consumption
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.order("coxinha");
    // objetoRetornado.consumption // Retorno: ["coxinha"]

    // verifica se a chave 'order' existe no objeto retornado
    assert.ok(Object.keys(objectReturned3).includes('order'));

    // verifica se o valor de objectReturned3.order é 'function'
    assert.strictEqual(typeof objectReturned3.order, 'function');

    objectReturned3.order('coxinha');
    // verifica se o valor da chave 'consumption' é ['coxinha']
    assert.deepStrictEqual(objectReturned3.consumption, ['coxinha']);
    // ```
    // Agora faça o PASSO 3 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 6: Verifique que as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.
    // ```
    // objetoRetornado.order("coxinha");
    // objetoRetornado.order("agua");
    // objetoRetornado.order("sopa");
    // objetoRetornado.order("sashimi");
    // objetoRetornado.consumption // Retorno: ["coxinha", "agua", "sopa", "sashimi"]

    objectReturned3.order('agua');
    // verifica se o valor da chave 'consumption' é ['coxinha', 'agua']
    assert.deepStrictEqual(objectReturned3.consumption, ['coxinha', 'agua']);

    objectReturned3.order('sopa');
    // verifica se o valor da chave 'consumption' é ['coxinha', 'agua', 'sopa']
    assert.deepStrictEqual(objectReturned3.consumption, [
      'coxinha',
      'agua',
      'sopa',
    ]);

    objectReturned3.order('sashimi');
    // verifica se o valor da chave 'consumption' é ['coxinha', 'agua', 'sopa', 'sashimi']
    assert.deepStrictEqual(objectReturned3.consumption, [
      'coxinha',
      'agua',
      'sopa',
      'sashimi',
    ]);

    // ```
    // Agora faça o TESTE 7 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 7: Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    // ```
    // objetoRetornado.order('coxinha');
    // objetoRetornado.order('agua');
    // objetoRetornado.order('coxinha');
    // objetoRetornado.comsuption // Retorno: ['coxinha', 'agua', 'coxinha']

    objectReturned3.order('coxinha');
    // verifica se o valor da chave 'consumption' é ['coxinha', 'agua', 'sopa', 'sashimi', 'coxinha']
    assert.deepStrictEqual(objectReturned3.consumption, [
      'coxinha',
      'agua',
      'sopa',
      'sashimi',
      'coxinha',
    ]);

    // ```
    // Agora faça o TESTE 8 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 8: Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    // ```
    // objetoRetornado.order('coxinha');
    // objetoRetornado.order('agua');
    // objetoRetornado.order('coxinha');
    // objetoRetornado.pay() // Retorno: somaDosPreçosDosPedidos

    // verifica se a chave 'pay' existe no objeto retornado
    assert.ok(Object.keys(objectReturned3).includes('pay'));

    // verifica se o valor de objectReturned3.pay é 'function'
    assert.strictEqual(typeof objectReturned3.pay, 'function');

    let somaDosPrecosDosPedidos = 0;
    for (const order of objectReturned3.consumption) {
      if (objectInputed.food[order]) {
        somaDosPrecosDosPedidos += objectInputed.food[order];
      } else if (objectInputed.drinks[order]) {
        somaDosPrecosDosPedidos += objectInputed.drinks[order];
      }
    }

    somaDosPrecosDosPedidos *= 1.1;

    // verifica se o valor retornado pela função 'objectReturned3.pay()' e somaDosPrecosDosPedidos são iguais
    assert.strictEqual(objectReturned3.pay(), somaDosPrecosDosPedidos);

    // ```
    // Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
  });
});
