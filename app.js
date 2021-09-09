//global variable
const errorDiv = document.getElementById('errorDiv')
const errorMessage = document.getElementById('error-msg')
// submit button
document.getElementById('submit-btn').addEventListener('click', function () {
    const emailField = document.getElementById('email')
    const email = emailField.value;
    emailField.value = '';
    validEmail(email)


})
const validEmail = email => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const checkEmail = regex.test(String(email).toLowerCase())
    // checking validity
    if (checkEmail) {
        error('green', 'Your email are correct')
    }
    else {
        error('red', 'Your email adrress are invalid try again')
    }
    return checkEmail;
}
// show error message
const error = (color, text) => {
    errorDiv.style.display = 'block'
    errorDiv.style.backgroundColor = color
    errorMessage.innerText = text
}


