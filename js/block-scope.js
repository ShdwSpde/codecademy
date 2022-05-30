// Declare the city variable  gloabally outside the scope of the function block but can still access it for concatenation. Remember inner brackets for callback!!
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


