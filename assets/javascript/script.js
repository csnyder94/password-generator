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
//Pop-Up Window asking for password length with requirements
  var password = ''
  let passwordLength = window.prompt("How many characters would you like your password to contain?        Must be between 8 and 128 characters.") 

//Pop-Up Window asking for confirmation of: special characters, numeric character, lowercase characters, and uppercase characters
if (passwordLength >= 8 && passwordLength <= 128){
  var specialCharacters = window.confirm("Click OK to confirm including special characters.");
  var numericCharacters = window.confirm("Click OK to confirm including numeric characters.");
  var lowerCaseCharacters = window.confirm("Click OK to confirm including lowercase characters.");
  var upperCaseCharacters = window.confirm("Click OK to confirm including uppercase characters.");
}
else {
  window.alert("Password length must be at least 8 characters.")
}
}  
