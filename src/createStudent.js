const createStudent = (studantName) => {
  const student = {
    name: studantName,
    feedback: () => 'Eita pessoa boa!',
  };
  return student;
};

module.exports = createStudent;
