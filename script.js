// make a button to create a new password
// create the code to make the password characters
// making sure the password is no more than 128 and no less than 8
// making sure passwords has include lowercase, uppercase, numeric and or special character
// add four arrays, lowercase, uppercase, numeric and special characters
// prompt for what the user wants to include
// need a variable to for include changes
// when one variabe is entered then random select from each selected critieria for the generated password
// add an alert when password is generated

// Assignment Code
var length;
var passwordOptions = {
  lowercase: true,
  uppercase: true,
  numeric: true,
  specialCharacters: true,
};

var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "]",
  "[",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

function getLength() {
  length = prompt(
    "How long do you want your password to be? Enter a number between 8 and 128"
  );
  if (length < 8) confirm("Password must be at least 8 characters`");
  if (length > 128) confirm("Password cannot be more than 128 characters"); // how do i make sure the user is only picking out of those options , no less than 8 and no more than 128
}
getLength();

function getConditions() {
  alert(
    "Please select at least one of the following: lowercase, uppercase, numeric or special character"
  ); // this is an alert to let the user know the criteria

  passwordOptions.lowercase = confirm(
    "Would you like to use lowercase letters?"
  );

  passwordOptions.uppercase = confirm("Would you like to add uppercase?");

  passwordOptions.numeric = confirm(
    "Would you like to add a numeric character?"
  );

  passwordOptions.specialCharacters = confirm(
    "Would you like to add special characters?"
  );
}
getConditions();

// i need to be able to get random characters for the criteria and make a random password with the requests from the user

function getPassword() {
  return Math.floor(Math.random() * getLength);
}

function getpassword1() {
  var lowercaseIndex = Math.floor(Math.random() * lowercase.length);
  var lowercaseCharacter = lowercase[lowercaseIndex];
  var passwordtext = passwordtext.concat(lowercaseCharacter);
} // make function for each character , keep passwordtext in each function

function getpassword2() {
  var uppercaseIndex = Math.floor(Math.random() * uppercase.length);
  var uppercaseCharacter = uppercase[uppercaseIndex];
  var passwordtext = passwordtext.concat(uppercaseCharacter);
}

function getpassword3() {
  var numericIndex = Math.floor(Math.random() * numeric.length);
  var numericCharacter = numeric[numericindex];
  var passwordtext = passwordtext.concat(numericCharacter);
}

function getpassword4() {
  var specialIndex = Math.floor(Math.random() * specialCharacters.index);
  var specialCharacter = specialCharacters[specialIndex];
  var passwordtext = passwordtext.concact(specialCharacter);
}
getPassword();
getpassword1();
getpassword2();
getpassword3();
getpassword4();

//variable declaration
function generateIntChar() {
  if (passwordOptions.lowercase === true) {
    getpassword1(); //add other functions
  }
  if (passwordOptions.uppercase === true) {
    getpassword2();
  }
  if (passwordOptions.numeric === true) {
    getpassword3();
  }
  if (passwordOptions.specialCharacters === true) getpassword4();
}
generateIntChar();

function randomchar() {
  var randomNumber = Math.floor(Math.random() * 4);
  if (randomNumber === 0) {
    if (passwordOptions.lowercase === true) {
      getpassword1();
    } else if (passwordOptions.lowercase === false) {
      randomchar(); // make
    }
  }
  if (passwordOptions.uppercase === true) {
    getpassword2();
  } else if (passwordOptions.uppercase === false) {
    randomchar();
  }
  if (passwordOptions.numeric === true) {
    getpassword3();
  } else if (passwordOptions.numeric === false) {
    randomchar();
  }
  if (passwordOptions.specialCharacters === true) {
    getpassword4();
  } else if (passwordOptions.specialCharacters === false) {
    randomchar();
  }
}
randomchar();

var generateBtn = document.querySelector("#generate");
addEventListener.writePassword;
getLength();
getConditions();

// Write password to the #password input
function writePassword() {
  while (passwordtext.length < length) {
    generateIntChar();
    randomchar();
  }

  var password = generatePassword(getLength + getConditions);
  var passwordText = document.querySelector("#password");
  passwordText.value = "Your password is: " + password;
}
writePassword();

//Add event listener to generate button
addEventListener("click", writePassword);
