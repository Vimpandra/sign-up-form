const firstName = document.getElementById(`firstName`);
const lastName = document.getElementById(`lastName`);
const email = document.getElementById(`email`);
const phoneNumber = document.getElementById(`phoneNumber`);
const password = document.getElementById(`password`);
const confirmPw = document.getElementById(`confirmPw`);
const form = document.getElementById(`form`);
const pwErrorMessage = document.getElementById(`pwErrorMessage`);

const inputs = Array.from(document.querySelectorAll(`input`));

function checkFill(ipt) {
    if (ipt.value.length == 0) {
        ipt.classList.remove(`filled`)
    } else {
        ipt.classList.add(`filled`)
    }
};


inputs.forEach(input => {
    input.addEventListener(`input`, () => {
        checkFill(input);
    })
});

confirmPw.addEventListener(`input`, () => {
    if (confirmPw.value !== password.value) {
        pwErrorMessage.textContent = `*Your passwords do not match`
    } else {
        pwErrorMessage.textContent = ``
    }
});

form.addEventListener(`submit`, (e) => {    
    if (pwErrorMessage.textContent.length > 0) {
        e.preventDefault();
    }
});


