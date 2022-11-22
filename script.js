var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function getPasswordCriteria() {
  var userChoseNumbers = confirm("Do you want numbers in your password?");
  var options = {
    userChoseNumbers: userChoseNumbers
  };
  return options;
}

function createRandom(length) {
  var randomNum = Math.floor(Math.random() * length);
  return randomNum;
}

function generatePassword() {
  var userChose = getPasswordCriteria();
  var availableChars = [];
  var passwordArr = [];
  if (userChose.userChoseNumbers) {
    availableChars = availableChars.concat(numbers);
  }

  for (var i = 0; i < 4; i++) {
    passwordArr.push(availableChars[createRandom(availableChars.length)])
  }


  return passwordArr.join("")
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
