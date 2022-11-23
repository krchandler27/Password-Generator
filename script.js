var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var letters = ["a", "b", "c", "d", "e", "f"]

function generatePassword() {
  // var userChose = createPasswordCriteria();
  var userChoseNumbers = confirm("Do you want numbers in your password?");
  var userChoseLetters = confirm("Do you want letters in your password?");
  var availableChars = [];
  var passwordArr = [];
  if (userChoseNumbers) {
    availableChars = availableChars.concat(numbers);
  }

  if (userChoseLetters) {
    availableChars = availableChars.concat(letters);
  }
 
  for (var i = 0; i < 8; i++) {
    var randomNum = Math.floor(Math.random() * availableChars.length);
    var randomChar = availableChars[randomNum];
    passwordArr.push(randomChar);
  }


  return passwordArr.join("");
}
// When we click on the button we want password to show on the screen
// Grab the #generate element or generate button
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
