// You can use the .forEach() method to iterate through an array and invoke a callback function for each element in the array

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function(fruit){
  console.log('I want to eat a ' + fruit)
})



// We can use the .map() method to iterate through an array and create a new array with specified elements
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

const secretMessage = animals.map(firstLetter => firstLetter[0]);
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(dividend => {
  return dividend / 100;
});
console.log(smallNumbers);


// .filter() also allows us to iterate through an array. however this sorts through the given array using a callback function. elements that evaluate to true based upon the callback function are added as elements in the new array
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(number => {
  return number < 250
});

console.log(smallNumbers);
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
});

console.log(longFavoriteWords);



// .findIndex() method sorts through a given array and finds the index of the first element that evaluates to true based on a callback function
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

console.log(foundAnimal);

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
})

console.log(startsWithS);

// .reduce() allows us to condense the elements of an array to a single element using a callback function. it will iterate through the array starting with the first element(accumulator) unless we specify otherwise by giving it a specific value as the initiator as a second parameter

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((
  accumulator, currentValue) => {
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of the currentValue: ', currentValue);
    return accumulator + currentValue;
  }, 10);
console.log(newSum);


// we can use .some() and .every() to check if any elements of an array evaluate to true based off callback function
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array

const interestingWords = words.filter(word => {
  return word.length > 5;
});

console.log(interestingWords);

console.log(interestingWords.every((word) => { 
  return word.length > 5;
 } ));


//Every iterator has a situation to be used in. Choose appropriately

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);


