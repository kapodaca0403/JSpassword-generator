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

var passwordOptions = {
  lowercase: true, 
  uppercase: true, 
  numeric: true, 
  specialCharacters: true
}

function getLength() {
  var length = prompt ("How long do you want your password to be? Enter a number between 8 and 128");
console.log(length);
}
function getConditions(){
  alert ("Please select at least one of the following: lowercase, uppercase, numeric and special character");
passwordOptions.lowercase = confirm ("Would you like to use lowercase letters?"); 
}



// variable declaration 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  getPassword();
  getConditions();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
