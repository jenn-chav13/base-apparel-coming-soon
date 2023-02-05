
const form = document.getElementById("subscription-form");
const emailField = document.getElementById("email");
const errorIcon = document.getElementById("email-error-icon");
const errorMessage = document.getElementById("error-message");

const isValidEmail = (input) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return input && input != '' && emailRegex.test(input);
};

const validateForm = () => {
    const emailInput = emailField?.value;
    if(!isValidEmail(emailInput)) {
        emailField.classList.add("email-error");
        errorIcon.classList.remove("hidden");
        errorMessage.classList.remove("hidden");
        return;
    }
    emailField.classList.remove("email-error");
    errorIcon.classList.add("hidden");
    errorMessage.classList.add("hidden");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
});

