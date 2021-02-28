// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input *The function will display generated password*
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    if(password){
        passwordText.value = password;
    };
    
}

//Function will create a random password
function generatePassword() {
    // variables for possible characters
    const pwdLength = prompt('How many characters do you want your password to contain? (Password must be a minimum of 8 characters and no more than 128 characters)');
    const containsLowercase = "abcdefghijklmnopqrstuvwxyz".split("");
    const containsUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const containsNumbers = "0123456789".split("");
    const containsSpChar = "!#$%&'()*+,-./:;<=>?@[^_`{|}~".split("");
    
    // if statement that specifies condition to execute depending on user input for password length 
    if(pwdLength >= 8 && pwdLength <= 128) {
        alert('You have selected your password to be ' + pwdLength + ' characters long.');
    } else if(pwdLength < 8 || pwdLength > 128) {
        alert('Please type a number between 8 and 128.');
        return generatePassword();        
    } else {
        alert('Invalid entry.');
        return generatePassword();
    }

    // multiple confirm boxes that will display for user to determine or select what characters to include in random passwords
    lowercasePrompt = confirm('Would you like to include lowercase letters?');
    uppercasePrompt = confirm('Would you like to include uppercase letters?');
    numPrompt = confirm('Would you like to include numbers?');
    spCharPrompt = confirm('Would you like to include special characters');

    var lowercasePrompt
    var uppercasePrompt
    var numPrompt
    var spCharPrompt

    // variables for possible user criteria
    var options0 = [containsLowercase, containsUppercase, containsNumbers, containsSpChar].flat();
    var options1 = [containsLowercase, containsUppercase, containsNumbers].flat();
    var options2 = [containsLowercase, containsUppercase, containsSpChar].flat();
    var options3 = [containsLowercase, containsUppercase].flat();
    var options4 = [containsLowercase, containsNumbers].flat();
    var options5 = [containsLowercase, containsSpChar].flat();
    var options6 = [containsLowercase].flat();
    var options7 = [containsUppercase, containsNumbers, containsSpChar].flat();
    var options8 = [containsUppercase, containsNumbers].flat();
    var options9 = [containsUppercase, containsSpChar].flat();
    var options10 = [containsUppercase].flat();
    var options11 = [containsNumbers, containsSpChar].flat();
    var options12 = [containsNumbers].flat();
    var options13 = [containsSpChar].flat();
    var userPwd = '';

    // if statement that specifies condition to execute depending on user criteria for generated password
    if(lowercasePrompt && uppercasePrompt && numPrompt && spCharPrompt) {
        for(var i = 0; i < pwdLength; i++) {
            userPwd += options0[Math.floor(Math.random() * options0.length)];
        }
    } else if(lowercasePrompt && uppercasePrompt && numPrompt) {
        for(var i = 0; i < pwdLength; i++) {
            userPwd += options1[Math.floor(Math.random() * options1.length)];
        }
    } else if(lowercasePrompt && uppercasePrompt && spCharPrompt) {
        for(var i = 0; i < pwdLength; i++) {
            userPwd += options2[Math.floor(Math.random() * options2.length)];
        }
    } else if(lowercasePrompt && uppercasePrompt) {
        for(var i = 0; i < pwdLength; i++) {
            userPwd += options3[Math.floor(Math.random() * options3.length)];
        }
    } else if(lowercasePrompt && numPrompt) {
        for(var i = 0; i < pwdLength; i++) {
            userPwd += options4[Math.floor(Math.random() * options4.length)];
        }
    } else if(lowercasePrompt && spCharPrompt) {
        for(var i = 0; i < pwdLength; i++) {
            userPwd += options5[Math.floor(Math.random() * options5.length)];
        }
    } else if(lowercasePrompt) {
        for(var i = 0; i < pwdLength; i++) {
            userPwd += options6[Math.floor(Math.random() * options6.length)];
        }
    } else if(uppercasePrompt && numPrompt && spCharPrompt) {
        for(var i = 0; i < pwdLength; i++) {
            userPwd += options7[Math.floor(Math.random() * options7.length)];
        }
    } else if(uppercasePrompt && numPrompt) {
        for(var i = 0; i < pwdLength; i++) {
            userPwd += options8[Math.floor(Math.random() * options8.length)];
        }
    } else if(uppercasePrompt && spCharPrompt) {
        for(var i = 0; i < pwdLength; i++) {
            userPwd += options9[Math.floor(Math.random() * options9.length)];
        }
    } else if(uppercasePrompt) {
        for(var i = 0; i < pwdLength; i++) {
            userPwd += options10[Math.floor(Math.random() * options10.length)];
        }
    } else if(numPrompt && spCharPrompt) {
        for(var i = 0; i < pwdLength; i++) {
            userPwd += options11[Math.floor(Math.random() * options11.length)];
        }
    } else if(numPrompt) {
        for(var i = 0; i < pwdLength; i++) {
            userPwd += options12[Math.floor(Math.random() * options12.length)];
        }
    } else if(spCharPrompt) {
        for(var i = 0; i < pwdLength; i++) {
            userPwd += options13[Math.floor(Math.random() * options13.length)];
        }
    } else {
        alert('Please select at least one of the criteria.')
        return generatePassword();
    }
    return userPwd;
};

// Add event listener to generate button *The button the user will click to initiate the password generator*
generateBtn.addEventListener("click", writePassword);