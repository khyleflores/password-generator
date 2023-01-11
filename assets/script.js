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
var IsConfirmedLowerCase = true;
var IsConfirmedUpperCase = true;
var IsConfirmedNumeric = true;
var IsConfirmedSpecial = true;
//variable to store randomise characters from GetRandom function
var randomCharacters = "";
// New array for the selected characters from users
var selectedCharactersLists = [];



// Function to prompt user for password options
function getPasswordOptions() {
  lengthOfPassword = prompt("How many characters would you like? Please choose between 10 to 64.");
  //Make sure that length of password is a number and does not contain any letters ie "ten", "10T"
  lengthOfPassword = parseInt(lengthOfPassword);
  // Validate length of password should be between 10 and 64, also validate that if length of password is not a number
  while(lengthOfPassword < 10 || lengthOfPassword > 64 || isNaN(lengthOfPassword)){
    alert("You have entered an invalid option. Please choose between 10 to 64.")
    lengthOfPassword = prompt("How many characters would you like? Please choose between 10 to 64.");
  }
  IsConfirmedLowerCase = confirm("Do you want to add lowercase characters?");
  IsConfirmedUpperCase = confirm("Do you want to add uppercase characters?");
  IsConfirmedNumeric = confirm("Do you want to add numeric characters?");
  IsConfirmedSpecial = confirm("Do you want to add special characters ie $@%&*?");
  // Validate that at least one character type is selected
  while(IsConfirmedLowerCase === false && IsConfirmedUpperCase === false && IsConfirmedNumeric === false && IsConfirmedSpecial === false){
    alert("You have not picked any of the options.\nPlease pick at least one character type.")
    IsConfirmedLowerCase = confirm("Do you want to add lowercase characters?");
    IsConfirmedUpperCase = confirm("Do you want to add uppercase characters?");
    IsConfirmedNumeric = confirm("Do you want to add numeric characters?");
    IsConfirmedSpecial = confirm("Do you want to add special characters ie $@%&*?");
  }
  alert("Please click the Generate Password button to display password.")
}

// Function for getting a random element from an array
function getRandom(list) {
  return list[Math.floor(Math.random()*list.length)];
}

// Function to generate password with user input
function generatePassword() {
  //If statements to add the characters lists on an array when selected by the user
  if (IsConfirmedLowerCase){
    selectedCharactersLists = selectedCharactersLists.concat(lowerCasedCharacters);
  }
  if (IsConfirmedUpperCase){
    selectedCharactersLists = selectedCharactersLists.concat(upperCasedCharacters);
  }
  if (IsConfirmedNumeric){
    selectedCharactersLists = selectedCharactersLists.concat(numericCharacters);
  }
  if (IsConfirmedSpecial){
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



