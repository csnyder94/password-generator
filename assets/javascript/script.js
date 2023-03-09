// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

// Textbox that displays generated password  
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
// Pop-Up Window asking for password length
  var password = ''
  let passwordLength = window.prompt("How many characters would you like your password to contain?        Must be between 8 and 128 characters.") 

// Pop-Up Window asking for confirmation of: special characters, numeric character, lowercase characters, and uppercase characters
if (passwordLength >= 8 && passwordLength <= 128){

  var specialCharacters = window.confirm("Click OK to confirm including special characters.");

  var numericCharacters = window.confirm("Click OK to confirm including numeric characters.");

  var lowerCaseCharacters = window.confirm("Click OK to confirm including lowercase characters.");

  var upperCaseCharacters = window.confirm("Click OK to confirm including uppercase characters.");

  let generatedCharacters = randomCharacters(specialCharacters, numericCharacters, lowerCaseCharacters, upperCaseCharacters);
  password = generatedPassword(generatedCharacters, passwordLength)
}
else {
  window.alert("Password length must be between 8 and 128 characters.") // If password doesn't meet length criteria this alert appears. 
}
return password
}  

function generatedPassword (generatedCharacters, passwordLength){
  var password = ''
// For loop to increment characters 1 at a time until the password length is reached.
for (var i=0; i < passwordLength; i++){
  var random = Math.floor((Math.random() * generatedCharacters.length));
  password += generatedCharacters.charAt(random)
  console.log(password)
}

return password
}
// Calls randomCharacters to function.  The variables set the criteria for what letters the function can choose from.
function randomCharacters(specialCharacters, numericCharacters, lowerCaseCharacters, upperCaseCharacters){

var generatedSpecialCharacters = '`~!@#$%^&*()-_=+[{]}\|;:",<.>/?';

var generatedNumericCharacters = '0123456789';

var generatedLowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';

var generatedUpperCaseCharcters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var characters = ""
// If statement to add generated characters from each specific class to the characters string if the specific class is true. If not selected to include, that classes characters will not be added.
if (specialCharacters){
  characters += generatedSpecialCharacters
}
if (numericCharacters){
  characters += generatedNumericCharacters
}
if (lowerCaseCharacters){
  characters += generatedLowerCaseCharacters
}
if (upperCaseCharacters){
  characters += generatedUpperCaseCharcters
}
return characters
}