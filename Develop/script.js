// Assignment Code
var generateBtn = document.querySelector("#generate");

//necessary variables to generate password
var specialChar = "!#$%&()*+,-./:;<=>?@[^_{|}~";
var numericChar = "1234567890";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var startPassword = "";
var password = "";


function generatePassword() {
  //validates if password is the correct length and alerts user to adjust accordingly
  var passwordLength = prompt("Please input password length between 8-128 characters");
  if (passwordLength < 8 || passwordLength > 128) {alert("Password length must be between 8-128 characters.");return}
//Series of prompts that allow the user to select which character types they wish to use in their password
  var upperConfirm = confirm(
    "select yes if you would like to include upper case letters"
  );
  var lowerConfirm = confirm(
    "select yes if you would like your password to include lower case letters"
  );
  var numberConfirm = confirm(
    "select yes if you would like your password to include numbers"
  );
  var specialConfirm = confirm(
    "select yes if you would like your password to include special characters (!#$%&()*+,-./:;<=>?@[^_{|}~)"
  );

  if (upperConfirm) {startPassword += uppercaseChar;}
  if (lowerConfirm) {startPassword += lowercaseChar;}
  if (numberConfirm) {startPassword += numericChar;}
  if (specialConfirm) {startPassword += specialChar;}
  // validates that a character type was chosen and instructs the user a password will not generate unless they do so.
  if (!upperConfirm && !lowerConfirm && !numberConfirm && !specialConfirm){alert("Password will not generate unless one or more character types are chosen."); return}

//randomly selects and links different characters based on the users selection and generates the password
  for (let i = 0; i < passwordLength; i++) {
    password +=
      startPassword[Math.floor(Math.random() * startPassword.length)];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
