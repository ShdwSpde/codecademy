// Declare the city variable  globally outside the scope of the function block but can still access it for concatenation. Remember inner brackets for callback!!
const city = 'New York City';
function logCitySkyline () {
  let skyscraper = 'Empire State Building'
  return 'The stars over the ' + skyscraper + ' in ' + city;
};
console.log(logCitySkyline());

// Notice you can access all global variables though none are declared in the function block
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callMyNightSky = () => {
	return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
};

console.log(callMyNightSky());

// Notice calling the variable outside of the block returns a reference error as that is not globally defined
function logVisibleLightWaves () {
  const lightWaves = 'Moonlight'
  console.log(lightWaves)
};
logVisibleLightWaves();
console.log(lightWaves)


// In this example, we have polluted the scope of the variable by reassigning the global variable. Use different naming conventions or use 'let' in function to retain the global value
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius'
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars)

// Inside the if block console.log(lightWaves) logs the value Northern Lights to the console. Outside the if block, but still within the function, the same statement logs Moonlight to the console.

const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights'
    console.log(lightWaves)
  }
  
  console.log(lightWaves);
};

logVisibleLightWaves();
