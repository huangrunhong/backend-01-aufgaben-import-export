//  nur das ERSTE Element des Arrays zurück
const onlyFirstElement = (props) => props.slice(0, 1);
//  alle AUSSER dem letzten Element des Arrays zurück
const allExceptLastElement = (props) => !props.pop();
//  nur das LETZTE Element des Arrays zurück
const onlyLastElement = (props) => props.pop();
// ALLE AUSSER DEM ERSTEN Element des Arrays zurück
const allExceptFirstElement = (props) => props.slice(1, -1);

// entfern ein bestimmtes Element komplett aus deinem Array
const removeDefinitelyElement = (props, input) =>
  props.filter((item) => item !== input);
// Entfern die doppelten Elemente
const removeDoubleElement = (props) =>
  props.filter((item, index) => props.indexOf(item) === index);
// die Summe des Arrays
const summe = (props) => props.reduce((a, b) => a + b);

// eine zufällige Zahl zwischen die zwei Parametern
const randomNumber = (number1, number2) => Math.random() * number2 + number1;
//Umwandeln den ersten Buchstaben in einen Großbuchstaben
const firstLetterBig = (string) =>
  string.slice(0, 1).toUpperCase().concat(string.slice(1));

//umwandeln den gesamten String in Großbuchstaben
const allLettersBig = (string) => string.toUpperCase();
// überprüfen ob der letzte Buchstabe von Parameter 1 mit dem Parameter 2 überein stimmt
const check = (string1, string2) =>
  string1.toLowerCase().includes(string2) ? true : false;

module.exports = {
  onlyFirstElement,
  allExceptLastElement,
  onlyLastElement,
  allExceptFirstElement,
  removeDefinitelyElement,
  removeDoubleElement,
  summe,
  randomNumber,
  firstLetterBig,
  allLettersBig,
  check,
};
