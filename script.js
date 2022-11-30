// List of possible password characters
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "-", "_"];



function generatePassword() {
  var userChoosePasswordLength = prompt("Please choose the desired length of your password (this must be between 8-128 characters).")

  if (userChoosePasswordLength < 8 || userChoosePasswordLength > 128) {
    var userChoosePasswordLength = prompt("ALERT! You chose " + userChoosePasswordLength + " characters for your password. This is NOT acceptable criteria for this number generator. PLEASE CHOOSE A PASSWORD BETWEEN 8-128 CHARACTERS.");
  }

  var userChoseNumbers = confirm("Select 'OK' if you would you like to include numbers in your password. If not, select 'Cancel'.");

  if (userChoseNumbers == true) {
    alert("You chose to include numbers in your password.");
  }
else {
    alert("You chose to NOT include numbers in your password.");
  }

  var userChoseLowLetters = confirm("Select 'OK' if you would you like to include lowercase letters in your password. If not, select 'Cancel'.");

  if (userChoseLowLetters == true) {
    alert("You chose to include lowercase letters in your password.");
  }
  else {
    alert("You chose to NOT include lowercase letters in your password.");
  }

  var userChoseCapLetters = confirm("Select 'OK' if you would you like to include uppercase letters in your password. If not, select 'Cancel'.");

  if (userChoseCapLetters == true) {
    alert("You chose to include uppercase letters in your password.");
  }
  else {
    alert("You chose to NOT include uppercase letters in your password.");
  }

  var userChoseSpecialChars = confirm("Select 'OK' if you would you like to include special characters in your password. If not, select 'Cancel'.");

  if (userChoseSpecialChars == true) {
    alert("You chose to include special characters in your password.");
  } else {
    alert("You chose to NOT include special characters in your password.");
  }

  if (userChoseCapLetters == false && userChoseLowLetters == false &&userChoseNumbers == false && userChoseSpecialChars == false) {
    alert("You did not choose 'OK' for any of the password criteria. No password will be generated. After clicking 'OK' please click 'Generate Password' to start the process again.")
  }

  var availableChars = [];
  var passwordArr = [];

  if (userChoseNumbers) {
    availableChars = availableChars.concat(numbers);
  }
  if (userChoseLowLetters) {
    availableChars = availableChars.concat(lowLetters);
  }
  if (userChoseCapLetters) {
    availableChars = availableChars.concat(capLetters);
  }
  if (userChoseSpecialChars) {
    availableChars = availableChars.concat(specialChars);
  }


  for (var i = 0; i < userChoosePasswordLength; i++) {
    var randomNum = Math.floor(Math.random() * availableChars.length);
    var randomChar = availableChars[randomNum];
    passwordArr.push(randomChar);
  }

  return passwordArr.join("");
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
