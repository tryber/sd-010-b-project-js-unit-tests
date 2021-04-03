/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/

/*
  Material consultado sobre como definir métodos para objetos
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_methods
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
  https://www.w3schools.com/js/js_object_methods.asp
  https://stackoverflow.com/a/31095976
  https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/
 */
const createStudent = (name) => Object({
  name,
  feedback: () => 'Eita pessoa boa!',
});

module.exports = createStudent;
