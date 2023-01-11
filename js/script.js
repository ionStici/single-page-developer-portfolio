"use strict";

// NAV

const nav = document.querySelector(".header");

window.addEventListener("scroll", function (e) {
    if (window.scrollY > 80) {
        nav.style.opacity = "0";
        nav.style.visibility = "hidden";
        nav.style.pointerEvents = "none";
    } else if (window.scrollY < 80) {
        nav.style.opacity = "1";
        nav.style.visibility = "visible";
        nav.style.pointerEvents = "revert";
    }
});

// FORM

const form = document.querySelector(".form");
const btn = document.querySelector(".form__btn");
const textInput = document.querySelector(".form__message");

const nameInput = document.querySelector(".form__name");
const nameIcon = document.querySelector(".form__icon--name");
const nameError = document.querySelector(".form__error--name");

const emailInput = document.querySelector(".form__email");
const emailIcon = document.querySelector(".form__icon--email");
const emailError = document.querySelector(".form__error--email");

function checkIfEmailIsValid(input) {
    var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {
        // Valid
        return true;
    } else {
        // Invalid
        return false;
    }
}

nameInput.addEventListener("change", function (e) {
    nameInput.style.borderBottom = "1px solid #4ee1a0";
    nameIcon.style.opacity = "0";
    nameError.style.opacity = "0";
});

emailInput.addEventListener("change", function (e) {
    if (checkIfEmailIsValid(emailInput.value)) {
        emailInput.style.borderBottom = "1px solid #4ee1a0";
        emailIcon.style.opacity = "0";
        emailError.style.opacity = "0";
    } else {
        emailInput.style.borderBottom = "1px solid #ff6f5b";
        emailIcon.style.opacity = "1";
        emailError.style.opacity = "1";
    }
});

textInput.addEventListener("change", function () {
    textInput.style.borderBottom = "1px solid #4ee1a0";
});

const checkForm = function (e) {
    e.preventDefault();

    if (!nameInput.value) {
        nameInput.style.borderBottom = "1px solid #ff6f5b";
        nameIcon.style.opacity = "1";
        nameError.style.opacity = "1";
    }

    if (!checkIfEmailIsValid(emailInput.value)) {
        emailInput.style.borderBottom = "1px solid #ff6f5b";
        emailIcon.style.opacity = "1";
        emailError.style.opacity = "1";
    }

    if (!nameInput.value || !checkIfEmailIsValid(emailInput.value)) return;

    emailInput.value = "";
    textInput.value = `Hello 👋, I will contact you shortly 🌠`;
    nameInput.value = "";

    nameInput.setAttribute("readonly", "readonly");
    emailInput.setAttribute("readonly", "readonly");
    textInput.setAttribute("readonly", "readonly");

    nameInput.style.backgroundColor = "#777";
    emailInput.style.backgroundColor = "#777";
    textInput.style.backgroundColor = "#777";
    btn.style.backgroundColor = "#777";

    btn.textContent = "Message Sent";
};

form.addEventListener("submit", checkForm);
btn.addEventListener("click", checkForm);

// FORM END
