// Declare the city variable outside the scope of the function but can still access it for concatenation. Remember inner brackets for callback!!
const city = 'New York City';
function logCitySkyline () {
  let skyscraper = 'Empire State Building'
  return 'The stars over the ' + skyscraper + ' in ' + city;
};
console.log(logCitySkyline());
