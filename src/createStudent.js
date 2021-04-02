const createStudent = (param) => {
  const feedback = () => 'Eita pessoa boa!';
  return { name: param, feedback };
};

module.exports = createStudent;
