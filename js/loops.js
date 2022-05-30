// Logging items in an array an be tedious
const vacationSpots = ['Cairo','Rome','Tokyo']

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);


// We can use a for loop to iterate from an initialization to a stopping point using an iteration statement. here we are using a counter
for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
}


// We previously went up in value, using the -- and switching >,< signs we can similarly iterate downwards or backwards
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}


// Here we use i to set the initialization in the index and then the length property of the array to iterate through the set. Concatenation in the log
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i]);
}


// You can nest loops. Here we iterate through two independent arrays and compare values stored in them with for loops. Then we have used the push method to store the shared values to a previously defined and empty array
let bobsFollowers = ['jill','carly', 'mason', 'scott'];
let tinasFollowers = ['jill','carly','lisa']
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

console.log(mutualFollowers);


// Using a while loop we were able to simulate drawing through a deck until hitting a spade. We pushed the cards drawn to an empty array count and then use the index to see how many cards drawn until we reach a spade

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;
let count = [];
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)]
  count.push(currentCard);
  console.log(count);
}  

console.log(count.length)
//would make a project, if you can guess how many cards drawn till spade then you win and balloons. could be a crypto gambling?



// If we want a program to loop once and then while a specific condition exists we can use a do-while loop

let cupsOfSugarNeeded = 6;

let cupsAdded = 0;

let toGo = (cupsOfSugarNeeded - cupsAdded)

do {console.log(cupsAdded + ' cups down and ' + toGo + 'cups to go'); cupsAdded++, toGo--} while(cupsAdded < cupsOfSugarNeeded);
console.log("Now that's the recipe")


// We can use a break to stop the iteration through an array once a certain condition is met or target value is reached

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");





