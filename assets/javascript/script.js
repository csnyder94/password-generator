// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

//Textbox that displays generated password  
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
//Pop-Up Window asking for password length
  var password = ''
  let passwordLength = window.prompt("How many characters would you like your password to contain?        Must be between 8 and 128 characters.") 
}







