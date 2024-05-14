const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
    "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6",
    "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[",
    "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let passwordOne = ""
let passwordTwo = ""

function generatePasswords() {
    for (let i = 0; i < 2; i++) {
        let temporaryPassword = ""

        for (let i = 0; i < 15; i++) {
            temporaryPassword += getRandomCharacter()
        }
        if (i === 0) {
            passwordOne = temporaryPassword
        } else {
            passwordTwo = temporaryPassword
        }
    }

    updatePasswordsContainer()
}

function getRandomCharacter() {
    return characters[Math.floor(Math.random() * characters.length)]
}

function updatePasswordsContainer() {
    document.getElementById("password-one").textContent = passwordOne
    document.getElementById("password-two").textContent = passwordTwo
}
