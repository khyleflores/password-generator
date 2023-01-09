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

//variable to store how many characters user wants
var lengthOfPassword = 0;
//variables to store user's options
var IsAddedLowerCase = true;
var IsAddedUpperCase = true;
var IsAddedNumeric = true;
var IsAddedSpecial = true;
//variable to store randomise characters from GetRandom function
var randomCharacters = "";
// New array for the selected characters from users
var selectedCharactersLists = [];



// Function to prompt user for password options
function getPasswordOptions() {
lengthOfPassword = prompt("How many characters would you like? Please choose between 10 to 64.");
// Validate length of password which should be between 10 and 64
while(lengthOfPassword < 10 || lengthOfPassword > 64){
  alert("You have entered an invalid option. Please choose between 10 to 64.")
  lengthOfPassword = prompt("How many characters would you like? Please choose between 10 to 64.");
}
IsAddedLowerCase = confirm("Do you want to add lowercase characters?");
IsAddedUpperCase = confirm("Do you want to add uppercase characters?");
IsAddedNumeric = confirm("Do you want to add numeric characters?");
IsAddedSpecial = confirm("Do you want to add special characters ie $@%&*?");
}

// Function for getting a random element from an array
function getRandom(list) {
  return list[Math.floor(Math.random()*list.length)];
}

// Function to generate password with user input
function generatePassword() {
  //If statements to add the characters lists on an array when selected by the user
  if (IsAddedLowerCase){
    selectedCharactersLists = selectedCharactersLists.concat(lowerCasedCharacters);
  }
  if (IsAddedUpperCase){
    selectedCharactersLists = selectedCharactersLists.concat(upperCasedCharacters);
  }
  if (IsAddedNumeric){
    selectedCharactersLists = selectedCharactersLists.concat(numericCharacters);
  }
  if (IsAddedSpecial){
    selectedCharactersLists = selectedCharactersLists.concat(specialCharacters);
  }

  // For loop to get a number of random characters depending on the number of characters selected by the user
  for (var i = 0; i < lengthOfPassword; i++) {
    randomCharacters = randomCharacters + getRandom(selectedCharactersLists); 
  }
  return randomCharacters;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

//Call the function to prompt user input
getPasswordOptions();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);



