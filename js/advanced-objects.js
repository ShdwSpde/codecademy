// you can use this. within a calling object to access its related data and functions
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
  return `I am ${this.model} and my current energy level is ${this.energyLevel}`
  }
};


console.log(robot.provideInfo())

// when using this arrows in a method, do not use this. the program will confuse with the global this which may be undefined

const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
};

robot.checkEnergy();


// the _ is a naming convention used to insinuate that a property should not be changed. doing so may end up in type-conversion where you can see numbers and strings concatenated

const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high'

robot.recharge()


// getters!!! you should probably add more here ****

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number') {
      return 'My current energy level is ' + this._energyLevel
    } else {
      return 'System malfunction: cannot retrieve energy level'
    }
  }
};

console.log(robot.energyLevel);
