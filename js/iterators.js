// Functions can have properties such as .length and .name. For example we can use the .name property here. Methods such as .toString()

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

isTwoPlusTwo();

console.log(isTwoPlusTwo.name);


// A higher-order function is a function that either accepts functions as parameters, returns a function, or both! We call functions that get passed in as parameters callback functions.
// Here we use addTwo as a parameter in our higher order function checkConsistentOutput. This would also be our callback function in this example

const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
const checkA = val + 2;
const checkB = func(val);
if (checkA === checkB) {
  return func(val);
  } else {
    return 'inconsistent results';
  }
}
console.log(checkConsistentOutput(addTwo, 42));
