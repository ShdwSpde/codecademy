// Use arrays to store data. Basic component of programming
let summerGoals = ['Move back home to NYC', 'Enjoy catching up with friends', 'Re-integrate myself to family structure', 'Rejoice in having the space the find yourself']
console.log(summerGoals);


// More practice. Yay arrays
const hobbies = ['gardening', 'basketball', 'learning'];
console.log(hobbies);


// Array elements are indexed starting with a position of 0. You can call these by their position in index. Items not within span of array will be undefined
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];
console.log(listItem);

console.log(famousSayings[2])

console.log(famousSayings[3])


// Using the array name and index, you can change re-assign different index values
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados'


//  Arrays can be assigned using const or let. Using let we can reassign a new array but not using const. const we may update values though similar to let
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';

console.log(condiments);

condiments = ['Mayo'];

console.log(condiments);

utensils[3] = 'Spoon';

console.log(utensils)


// We can use the built-in array property of length to identify how many elements are stored in an array
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);


// Functions called methods for arrays. Push will add elements to the end of the array. Push is built-in
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('sell clutter on OfferUp', 'pack for NYC');
console.log(chores);


// We can use the pop method to remove the last element of an array and store it as pop()
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();

console.log(chores);


// We can use slice() to identify a subsection of an array using the start and end of our subsection. It is non-mutating though, unlike pop/push
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);

groceryList.unshift('popcorn');

console.log(groceryList);

console.log(groceryList.slice(1,4));

console.log(groceryList);


// Use indexOf() to identify the position in an array of the specific element referred to
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);

groceryList.unshift('popcorn');

console.log(groceryList);

console.log(groceryList.slice(1,4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);


// When we pass an array into a function, that array is mutated globally

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

function removeElement(newArr){
  newArr.pop();
}

removeElement(concept);

console.log(concept);


// Arrays can be nested similar to tags in html. You can then use indexes and chaining to target specific elements within nested arrays
const numberClusters = [[1,2],[3,4],[5,6]];

const target = numberClusters[2][1];

console.log(target);














