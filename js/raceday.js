let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistration = false;
let runnerAge = '18';

if ((earlyRegistration == true) && (runnerAge >= 18)) {
  raceNumber = (raceNumber + 1000);
}

console.log(raceNumber)

if ((earlyRegistration == true) && (runnerAge >= 18)) {
  console.log(`Runner ${raceNumber} will race at 9:30am`)
} else if ((earlyRegistration == false) && (runnerAge > 18)) {
  console.log(`Runner ${raceNumber} will race with the late adults at 11:00AM`)
} else if (runnerAge < 18) {
  console.log(`Runner ${raceNumber} will run with youth registrants at 12:30`)
} else {
  console.log('Please come to the registration desk')
}
