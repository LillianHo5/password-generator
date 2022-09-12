const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
const noNumbers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
const noSymbols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const lettersOnly = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let listToUse = characters;
let hasNumbers = true;
let hasSymbols = true;
let passwordOne = document.getElementById("password1");
let passwordTwo = document.getElementById("password2");

function removeNumbers() {
    hasNumbers = false;
}

function removeSymbols() {
    hasSymbols = false;
}

function createPassword() {
    // Clear out passwords before user generates another password
    passwordOne.textContent = "";
    passwordTwo.textContent = "";

    let passwordLength = document.getElementById("password-length").value;
    if (passwordLength == "") {
        passwordLength = 10;
    }
    if (passwordLength < 5) {
        alert("Password length is too short. Choose a length from 5 to 15 characters");
    } else if (passwordLength > 15) {
        alert("Password length is too long. Choose a length from 5 to 15 characters")
    } else {
        if (!hasNumbers && !hasSymbols) {
            listToUse = lettersOnly;
        } else if (hasNumbers && hasSymbols) {
            listToUse = characters;
        } else if (!hasNumbers) {
            listToUse = noNumbers;
        } else {
            listToUse = noSymbols;
        }
        let charSelect = 0;
        for (let i = 0; i < passwordLength; i++) {
            charSelect = Math.floor(Math.random() * listToUse.length);
            passwordOne.textContent += listToUse[charSelect];

            charSelect = Math.floor(Math.random() * listToUse.length);
            passwordTwo.textContent += listToUse[charSelect];
        }
    }
}

function reset() {
    hasNumbers = true;
    hasSymbols = true;
    listToUse = characters;

    passwordOne.textContent = "";
    passwordTwo.textContent = "";
    document.getElementById("password-length").value = "";
}

function copyPasswordOne() {
    passwordOne.select();
    passwordOne.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(passwordOne.value);

    // Alert the copied text
    alert("Copied the text: " + passwordOne.value);
}

// Source: https://gist.github.com/tomkeays/5e33c9c438ce1ab8fc610827ebcd3f72
function copyPassword(id) {
    const str = document.getElementById(id).innerText
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    alert("Copied password!")
}
