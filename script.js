const firstName = document.getElementById(`firstName`);
const lastName = document.getElementById(`lastName`);
const email = document.getElementById(`email`);
const phoneNumber = document.getElementById(`phoneNumber`);
const password = document.getElementById(`password`);
const confirmPw = document.getElementById(`confirmPw`);

const inputs = Array.from(document.querySelectorAll(`input`));

console.log(inputs)

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