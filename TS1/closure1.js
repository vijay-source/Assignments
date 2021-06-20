let factorial = number => {
  if (number < 2) {
    return number;
  } else {
    return number * factorial(number - 1);
  }
};

// const value = factorialorial(5);

// console.log("value", value);

let outerFunction = fun => {
  let count = 0;
  let innerFunction = (...rest) => {
    count++;
    return fun(...rest);
  };
  let times = () => {
    return count;
  };
  innerFunction.times = times;
  return innerFunction;
};

let getFactorial = outerFunction(factorial);

getFactorial(5);
getFactorial(6);
getFactorial(7);

let times = getFactorial.times();
console.log("function called for ", times);
