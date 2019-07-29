//episode 1

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// }; //Although scenario is a const, murderer could be updated as inside object
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`; //murderer is Miss Scarlet
// }
//
// const verdict = declareMurderer(); //will return that the murderer is Miss Scarlet.
// console.log(verdict); //will print this out

//episode 2

// const murderer = 'Professor Plum'; //this is a constant so murderer will remain Professor Plum
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock'; //won't change the murderer. Will throw an error as a cont can't be changed.
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`; //will return that Professor Plum is the murderer if the changeMurderer function is commented out.
// }
//
// changeMurderer(); //This should throw an error as a const cannot be changed.
// const verdict = declareMurderer(); //this will return 'The murderer is Professor Plum' if the changeMurderer call is commented out.
// console.log(verdict); //This will be printed out.


//episode 3

// let murderer = 'Professor Plum'; //This can be modified
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock'; //This modifies the murderer but only within the block of the declareMurderer function.
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer(); //This will save 'The murderer is Mrs Peacock ot the const firstVerdict'
// console.log('First Verdict: ', firstVerdict); // Mrs Peacock will be the murder logged to the console in this verdict.
//
// const secondVerdict = `The murderer is ${murderer}.`; // for the second verdict the murderer will be Professor Plum as this is set outside the declareMurderer block.
// console.log('Second Verdict: ', secondVerdict); //Professor Plum will be the murderer in the second verdict.

//episode 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard'; //changes suspectThree to be Colonel Mustard but only within the block of the declare all suspects function.
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects(); //This will return the suspects Miss Scarlet, Professor Plum and Colonel Mustard.
// console.log(suspects); //This will log the above to the console.
// console.log(`Suspect three is ${suspectThree}.`); // This will log 'Suspect three is Mrs Peacock'


//episode 5

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// } //This will update the weapon to be the weapon passed in as an argument.
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// } //This will return the weapon is whatever the weapon has been set to.
//
// changeWeapon('Revolver'); //This changes the weapon to be a revolver.
// const verdict = declareWeapon(); //this will store "The weapon is the revolver' in verdict"
// console.log(verdict); //verdict will be logged to the console.


//episode 6

// let murderer = 'Colonel Mustard'; //This is changeable
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green'; //This sets the murder everywhere to be Mr Green.
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White'; //This function sets the murderer everywhere to be Mrs. White
//   }
//
//   plotTwist(); //This calls the function that sets the murderer to be Mrs white everywhere.
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer(); //This sets Mrs White as the murderer.
// const verdict = declareMurderer(); // verdict is set the vaue of 'The murderer id Mrs White'
// console.log(verdict); //This is logged to the console.

//episode 7

// let murderer = 'Professor Plum'; //This is changeable
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';  //murderer is globally set to Mr Green.
//
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard'; //only set to Colonel Mustard within plotTwist block
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet'; //This overides Colonel Mustard and globally sets the murderer to be Miss Scarlet within the plotTwist function.
//     }
//
//     unexpectedOutcome(); //This calls the unexpectedOutcome within the plotTwist and sets murderer to Miss Scarlet within the plotTwist
//   }
//
//   plotTwist();
// }
//
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// } //This returns the murder is Mr Green.
//
// changeMurderer();
// const verdict = declareMurderer(); //murder still Mr Green
// console.log(verdict); //logs this to the console.

//episode 8

// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// }; // va;ues within object changeable
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard'); //murderer === to Colonel Mustard therefore weapon updated to be candlestick.
//   }
//
//   plotTwist('Dining Room'); //room == to dining room therefore murderer updated to be Colonel mustard.
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario(); //set's sets murder to Mrs Peacock and room to dining room. then plotTwist called which updates murderer to Colonel Mustard and calls unexpectedOutcome which sets weapon to candlestick.
// const verdict = declareWeapon(); //weapon is candlestick
// console.log(verdict);

//episode 9

// let murderer = 'Professor Plum';
//
// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// } //this is only set within the block.
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// } //murderer is Professor Plum
//
// const verdict = declareMurderer();
// console.log(verdict);

const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
}
const changeScenario = function () {
  if (scenario.murderer == 'Mr Green') {
    murderer = 'Miss Scarlet'
  } else {
    murderer = "Colonel Mustard"
  }
}

const updateMurderer = function () {
  let murderer = 'Mrs White'
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeScenario();
const verdict = declareMurderer();
console.log(verdict);
