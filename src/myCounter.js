/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija o código abaixo para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const myCounter = () => {
  let myArray = [];
  for (let contadorFor1 = 0; contadorFor1 <= 3; contadorFor1 += 1) {
    myArray.push(contadorFor1);
    for (let contadorFor2 = 2; contadorFor2 <= 3; contadorFor2 += 1) {
      myArray.push(contadorFor2);
    }
  }
  return myArray;
};

module.exports = myCounter;
