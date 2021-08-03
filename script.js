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
  specialCharacters: true,
}


var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numeric = ["0123456789"]; 
var specialCharacters = [" !#$%&'()*+,-./:;<=>?@]\[^_`{|}~ "];




function getLength() {
  var length = prompt ("How long do you want your password to be? Enter a number between 8 and 128");
  for ( var i = 0 ; i < length.length; i++) // how do i make sure the user is only picking out of those options , no less than 8 and no more than 128
  console.log(length);
}

function getConditions(){
  alert ("Please select at least one of the following: lowercase, uppercase, numeric or special character"); // this is an alert to let the user know the criteria 

  passwordOptions.lowercase = confirm ("Would you like to use lowercase letters?"); 

  if (passwordOptions.lowercase == true) // how do i get this to move to the next prompt after selecting a criteria or making sure a criteria is picked 


 if ( uppercpasswordOptions.uppercase = confirm ("Would you like to add uppercase?");
 
 if (numeric) passwordOptions.numeric = confirm ("Would you like to add a number?");

else  (specialCharacters)
  passwordOptions.specialCharacters = confirm ("Would you like to add a special character?"); 
   
  console.log(getConditions); 



 // i need to be able to get random characters for the criteria and make a random password with the requests from the user



//variable declaration 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  getLength();
  getConditions();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
