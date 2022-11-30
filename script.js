// List of possible password characters
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "-", "_"];



function generatePassword() {
  var userChoosePasswordLength = prompt ("Please choose the desired length of your password (this must be between 8-128 characters).")

  if (userChoosePasswordLength < 8 || userChoosePasswordLength > 128) {
    var userChoosePasswordLength2 = prompt ("You chose " + userChoosePasswordLength + " characters for your password. This is not acceptable criteria for this number generator. Please choose a password length between 8-128 characters.");
  }

  var userChoseNumbers = confirm("Select 'OK' if you would you like to include numbers in your password. If not, select 'Cancel'.");
  var userChoseLowLetters = confirm("Select 'OK' if you would you like to include lowercase letters in your password. If not, select 'Cancel'.");
  var userChoseCapLetters = confirm("Select 'OK' if you would you like to include uppercase letters in your password. If not, select 'Cancel'.");
  var userChoseSpecialChars = confirm("Select 'OK' if you would you like to include special characters in your password. If not, select 'Cancel'.");
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
