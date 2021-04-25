// function totalOfOrder() {
//   let total = 0;
//   const order = this.consumption;
//   const menu = {};
//   Object.assign(menu, this.fetchMenu().food, this.fetchMenu().drinks);
//   for (let key in order) {
//     if (menu[order[key]] !== undefined) {
//       total += menu[order[key]];
//     }
//   }
//   total *= 1.1;
//   total = parseFloat(total.toPrecision(4));
//   console.log(total);
// };

// function addOrder(string) {
//   this.consumption.push(string);
// };

// const createMenu = (object) => ({
//   fetchMenu: () => object,
//   consumption: [],
//   order: addOrder,
//   pay: totalOfOrder,
// });

// const objetoRetornado = createMenu({
//   food: {'coxinha': 3.90, 'sanduiche': 9.90},
//   drinks: {'agua': 3.90, 'cerveja': 6.90}
// });
// objetoRetornado.order('coxinha')
// console.log(objetoRetornado.consumption)
// objetoRetornado.pay();
