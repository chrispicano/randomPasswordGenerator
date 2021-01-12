// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = 0;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var newPassword = "";
  var length = prompt("How many characters would you like your password to be?");

console.log(length)

if ( length < 8){
  alert("Sorry must be longer than 8 characters :(");
  return 
}
if ( length > 128){
  alert("Sorry must be less than 128 characters!")
  return
}

var lowercase = confirm("Do you want lower case?");
  if (lowercase === true){
    newPassword += getRandomLower()
  }

var uppercase = confirm("Do you want an upper case?");
  if (uppercase === true){
    newPassword += getRandomUpper()
  }
var symbol = confirm("Do you want a special character?");
  if (symbol === true) {
    newPassword += getRandomSymbol()
  }
var number = confirm("Do you want a number?");
  if (number === true){
    newPassword += getRandomNumber()
  }

console.log(lowercase)
console.log(uppercase)
console.log(symbol)
console.log(number)
return newPassword
}



for (i = 0; i < length; i++) {

//function for random lower case letter
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}
//function for random upper case latter (numbers are represented on browser character chart)
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  var symbols = '!@#$%^&*(){}[]=<>/,.';
  var index = Math.floor(Math.random() * symbols.length)
  return symbols.charAt(index)
}



}
//duplicated functions for outside loop
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}
//function for random upper case latter (numbers are represented on browser character chart)
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  var symbols = '!@#$%^&*(){}[]=<>/,.';
  var index = Math.floor(Math.random() * symbols.length)
  return symbols.charAt(index)
}
