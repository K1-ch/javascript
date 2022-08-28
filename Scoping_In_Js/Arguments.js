/*argumnets decide the values that are passed by in the function in the form of an array*/

const addExp = function (a, b) {
  console.log(arguments);
  return a + b;
};

//we can add more arguments in it....

console.log(addExp(2, 5, 7, 10, 9));

const value = (a, b) => {
  console.log(arguments);
  return a + b;
};

console.log(value(2, 9, 10));
