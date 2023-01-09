# Password Generator

## Description 

This website is an application that an employee can use to generate a random password.
The user will be asked to answer five prompts to generate a random password based on the selected criterias. 

The five prompt/confirmations that will be asked to the users are the following:

* The Length of Password

* Do they want to include Lowercase characters

* Do they want to include Uppercase characters

* Do they want to include Numeric characters

* Do they want to include Special characters

When the prompts are answered, a random password will be generated in the text area in the browser. A validation is on this application that the user should picked at least 10 characters but not more than 64; and the user should at least picked one character type. 

## Installation

N/A

## Usage 

To use this application for an employee to generate a random password. 
Click on this [link](https://khyleflores.github.io/password-generator/ "Password Generator") or follow the link below:

https://khyleflores.github.io/password-generator/

The user will be prompted by some questions in which will affect the generated password. 
Below is a screenshot of the prompt for the user to enter the length of password they require.

![Length of Password prompt screenshot](/assets/screenshots/screenshot1.png)

User will also be prompted to select the chracter types they want to include.
Below is an example of the confirmations.

![Lowercase confirmation screenshot](/assets/screenshots/screenshot2.png)

If the user picks a number less than 10 and more than 64. They will be alerted and will be asked to pick again.

![Length of password validation screenshot](/assets/screenshots/screenshot3.png)

If the user doesn't select any character types. They will be alerted and will be asked to pick at least one of the character types again.

![Character types validation screenshot](/assets/screenshots/screenshot4.png)

At the end, when the user passes the validations, an alert box will be displayed instructing the user to click the Generate Password button.

![Alert to click the button screenshot](/assets/screenshots/screenshot5.png)

User will need to click the Generate Password button and the generated password will be displayed in the box. 

![Generate Password form screenshot](/assets/screenshots/screenshot6.png)

## Credits

Rascia, T (2017). *Using While Loops and Do...While Loops in JavaScript* digitalocean.com. https://www.digitalocean.com/community/tutorials/using-while-loops-and-do-while-loops-in-javascript.

Math.random(). (n.d.). mdn web docs. Retrieved January 6 2023, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

## License

MIT License

Copyright (c) [2023] [KhyleFlores]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
