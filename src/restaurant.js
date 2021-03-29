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

let menuItems = {};

const addOrder = (item) => {
  if (typeof item !== 'string') {
    throw new Error('Parâmetro esperado: string');
  }

  return menuItems.consumption.push(item);
};

const pay = (menu) => {
  const foodMenu = menu.food;

  const drinksMenu = menu.drink;

  const consumptionItems = menuItems.consumption;

  let sum = 0;

  for (let index = 0; index < consumptionItems.length; index += 1) {
    // código retirado no site https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
    if (Object.hasOwnProperty.call(foodMenu, consumptionItems[index])) {
      sum += foodMenu[consumptionItems[index]];
    }
    if (Object.hasOwnProperty.call(drinksMenu, consumptionItems[index])) {
      sum += drinksMenu[consumptionItems[index]];
    }
  }
  const increase = 1.1;
  return Number((sum * increase).toFixed(2));
};

const createMenu = (parameter) => {
  menuItems = {
    fetchMenu: () => parameter,
    consumption: [],

    order: (item) => addOrder(item),

    pay: () => pay(parameter),

  };
  return menuItems;
};

module.exports = createMenu;
