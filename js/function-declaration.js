// simple function and concatenation of parameters
function sayThanks(name) {
  console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}

sayThanks('Cole');

// replace inputs for function with default values
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
 makeShoppingList();

// function with return of value
function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);
 
// Declare A Variable from a function value
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows,columns){
  return monitorCount(rows,columns) * 200
}

const totalCost = costOfMonitors(5,4)

console.log(totalCost)

//declare a function expression - const variable that is composed of a function
const plantNeedsWater = function(day) {
  if (day === 'Wednesday'){
    return true
  }
  if (day !== 'Wednesday'){
    return false
  }
}

console.log(plantNeedsWater('Tuesday'))

// arrow function for syntax
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

