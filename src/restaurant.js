/* eslint-disable max-len */

/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema,
  cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema.
  Eles guiarão você pelo desenvolvimento.

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

  IMPORTANTE: COMECE PELO TESTE 1 DO ARQUIVO `tests/restaurant.spec.js` E NÃO PELO PASSO 1 DESTE ARQUIVO!
*/

// PASSO 1: Crie uma função `createMenu()` que, dado um objeto passado por parâmetro, retorna um objeto com o seguinte formato: { fetchMenu: () => objetoPassadoPorParametro }.
//
// Agora faça o TESTE 4 no arquivo `tests/restaurant.spec.js`.

//------------------------------------------------------------------------------------------

// PASSO 2: Adicione ao objeto retornado por `createMenu` uma chave `consumption` que, como valor inicial, tem um array vazio.
//
// Agora faça o TESTE 5 no arquivo `tests/restaurant.spec.js`.

//------------------------------------------------------------------------------------------

// PASSO 3: Crie uma função, separada da função `createMenu()`, que, dada uma string recebida por parâmetro,
// adiciona essa string ao array de `objetoRetornado.consumption`. Adicione essa função à chave `order`.
// DICA: para criar isso, você pode:
// - Definir a função `createMenu()`
// - Definir o objeto que a `createMenu()` retorna, mas separadamente
// - E, depois, definir a função que será atribuída a `order`.
// ```
// const restaurant = {}
//
// const createMenu = (myMenu) => // Lógica que edita o objeto `restaurant`
//
// const orderFromMenu = (request) => // Lógica que adiciona à chave `consumption` de `restaurant` a string recebida no parâmetro `request`.
// // Essa função deve ser associada à chave `order` de `restaurant`
// ```
// Agora faça o TESTE 6 no arquivo `tests/restaurant.spec.js`.

//------------------------------------------------------------------------------------------

// PASSO 4: Adicione ao objeto retornado por `createMenu()` uma chave `pay` com uma função que varre todo os itens de `objetoRetornado.consumption`,
// soma o preço de todos checando-os no menu e retorna o valor somado acrescido de 10%. DICA: para isso,
// você precisará varrer tanto o objeto da chave `food` quanto o objeto da chave `drink`.

// Objeto restaurant vazio, que vai ser retornado no createMenu
let restaurant = {};

// adiciona o request (order) ao consumption
const orderFromMenu = (request) => restaurant.consumption.push(request);

// Funções que compara o nome no pedido com o do menu e retorna a soma do valor
const compareFood = (mainOrder, produto, order) => {
  let sumFood = 0;
  if (produto === order) {
    sumFood += mainOrder.food[produto];
  }
  return sumFood;
};

const compareDrink = (mainOrder, produto, order) => {
  let sumDrink = 0;
  if (produto === order) {
    sumDrink += mainOrder.drink[produto];
  }
  return sumDrink;
};

const sum = (mainOrder) => {
  let sumFood = 0;
  let sumDrink = 0;
  let nameFood = Object.keys(mainOrder.food);
  let nameDrink = Object.keys(mainOrder.drink);
  // vai varrer o array que tem os pedidos
  for (let i = 0; i < restaurant.consumption.length; i += 1) {
    // vai varrer o array food
    for (let f = 0; f < nameFood.length; f += 1) {
      sumFood += compareFood(mainOrder, restaurant.consumption[i], nameFood[f]);
    }
    // vai varrer o array drinks
    for (let d = 0; d < nameDrink.length; d += 1) {
      sumDrink += compareDrink(mainOrder, restaurant.consumption[i], nameDrink[d]);
    }
  }
  return 1.10 * (sumFood + sumDrink);
};

const createMenu = (mainOrder) => {
  restaurant = {
    fetchMenu: () => mainOrder,
    consumption: [],
    order: (request) => orderFromMenu(request),
    pay: () => sum(mainOrder),
  };
  return restaurant;
};

module.exports = createMenu;
