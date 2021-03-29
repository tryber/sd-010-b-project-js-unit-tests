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
    const objetoQualquer = {
      food: { coxinha: 3.90, sanduiche: 9.90 },
      drinks: { agua: 3.90, cerveja: 6.90 },
    };

    const objetoRetornado = createMenu();
    assert.deepStrictEqual(typeof objetoRetornado, 'object');
    assert.deepStrictEqual(typeof objetoRetornado.fetchMenu, 'function');
    const objetoRetornado1 = createMenu({ food: {}, drink: {} });
    assert.deepStrictEqual(objetoRetornado1.fetchMenu(), { food: {}, drink: {} });

    // TESTE 3: Verifique que o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'

    const objetoRetornado2 = createMenu(objetoQualquer);
    assert.deepStrictEqual(objetoRetornado2.fetchMenu(), objetoQualquer);
    // TESTE 4: Verifique que 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.

    assert.deepStrictEqual(objetoRetornado2.consumption, []);

    // TESTE 5: Verifique que chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro,
    objetoRetornado2.order('coxinha');
    assert.deepStrictEqual(objetoRetornado2.consumption, ['coxinha']);
    // --------------------------------------------------------------------------------------
    // TESTE 6: Verifique que as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.
    // ```
    objetoRetornado2.order('agua');
    objetoRetornado2.order('sopa');
    objetoRetornado2.order('sashimi');
    assert.deepStrictEqual(objetoRetornado2.consumption, ['coxinha', 'agua', 'sopa', 'sashimi']);

    // --------------------------------------------------------------------------------------
    // TESTE 7: Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    // ```
    const objetoRetornado3 = createMenu(objetoQualquer);

    objetoRetornado3.order('coxinha');
    objetoRetornado3.order('agua');
    objetoRetornado3.order('coxinha');

    assert.deepStrictEqual(objetoRetornado3.consumption, ['coxinha', 'agua', 'coxinha']);

    // Agora faça o TESTE 8 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 8: Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    assert.deepStrictEqual(objetoRetornado3.pay(), 11.7);
    // objetoRetornado.pay() // Retorno: somaDosPreçosDosPedidos
    // ```
    // Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
  });
});
