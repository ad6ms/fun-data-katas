function createRef(employees, input1, input2) {
  const refObj = {};

  for (let i = 0; i < employees.length; i++) {
    refObj[employees[i][input1]] = employees[i][input2];
  }

  return refObj;
}

module.exports = createRef;
