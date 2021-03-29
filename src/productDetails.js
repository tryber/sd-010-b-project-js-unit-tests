/*
  Dadas duas strings que representam nomes de produtos,
  retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

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
*/

const productDetails = (firstProduct, secondProduct) => {
  if (!firstProduct || !secondProduct) {
    return undefined;
  }
  return [
    {
      name: firstProduct,
      details: {
        productId: `${firstProduct}123`,
      },
    },
    {
      name: secondProduct,
      details: {
        productId: `${secondProduct}123`,
      },
    },
  ];
};

module.exports = productDetails;

console.log(typeof (productDetails('Pão', 'Manteiga')));
