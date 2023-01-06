// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var lengthOfPassword = 0;
var IsAddedLowerCase = true;
var IsAddedUpperCase = true;
var IsAddedNumeric = true;
var IsAddedSpecial = true;
var randomCharacter = "a";
// New array for the selected characters
var selectedCharactersOptions = [];



// Function to prompt user for password options
function getPasswordOptions() {
//lengthOfPassword = prompt("How many characters would you like? Please choose between 10 to 64.");
IsAddedLowerCase = confirm("Do you want to add lowercase characters?");
IsAddedUpperCase = confirm("Do you want to add uppercase characters?");
IsAddedNumeric = confirm("Do you want to add numeric characters?");
IsAddedSpecial = confirm("Do you want to add special characters ie $@%&*?");
}

// Function for getting a random element from an array
function getRandom(arr) {
  randomCharacter = arr[Math.floor(Math.random()*arr.length)];
}


// Function to generate password with user input
function generatePassword() {
  if (IsAddedLowerCase){
    selectedCharactersOptions = selectedCharactersOptions.concat(lowerCasedCharacters);
  }
  if (IsAddedUpperCase){
    selectedCharactersOptions = selectedCharactersOptions.concat(upperCasedCharacters);
  }
  if (IsAddedNumeric){
    selectedCharactersOptions = selectedCharactersOptions.concat(numericCharacters);
  }
  if (IsAddedSpecial){
    selectedCharactersOptions = selectedCharactersOptions.concat(specialCharacters);
  }

   console.log(selectedCharactersOptions);
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

getPasswordOptions();
generatePassword();
