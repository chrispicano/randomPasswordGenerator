// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  

  passwordText.value = password;

}
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var password = ""
  
  var length = prompt("How many characters would you like your password to be?");



  if ( length < 8){
    alert("Sorry must be longer than 8 characters :(");
    return 
  }
  if ( length > 128){
    alert("Sorry must be less than 128 characters!")
    return
  }

  var lowercase = confirm("Do you want lower case?");
  var uppercase = confirm("Do you want an upper case?");
  var symbol = confirm("Do you want a special character?");
  var number = confirm("Do you want a number?");

  if (lowercase === true){
    console.log("PASS1", password)
    password += getRandomLower()
  }


  if (uppercase === true){
    console.log("PASS2", password)
    password += getRandomUpper()
  }

  if (symbol === true) {
    console.log("PASS3", password)
    password += getRandomSymbol()
  }

  if (number === true){
    console.log("PASS4", password)
    password += getRandomNumber()
  }
  var iterations = Number(length) - password.length
  console.log("PASS", password, Number(length), password.length, iterations)
  for (var i = 0; i < iterations; i++) {
      console.log("Here")
      password += "1";
  }

console.log(lowercase)
console.log(uppercase)
console.log(symbol)
console.log(number)
  return password

}




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

generateBtn.addEventListener("click", writePassword);