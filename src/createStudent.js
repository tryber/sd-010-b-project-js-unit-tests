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

const createStudent = (name) => ({

  name, // o Lint apontava erro toda vez que eu não deixava somente "name"
  feedback() {
    let sentence = 'Eita pessoa boa!';
    return sentence;
  }, // da forma que eu tentava fazer arrow function aqui, o LINT dava muitos erros. Tive que ir apagando muita coisa até ficar dessa forma e não dar mais erro no lint

});

module.exports = createStudent;
