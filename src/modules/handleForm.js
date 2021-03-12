import generatePass from "./generatePass"

const showPass = document.querySelector(".show-password");
const len = document.querySelector("#char-length");
const number = document.querySelector("#numbers");
const upper = document.querySelector("#upper");
const lower = document.querySelector("#lower");
const symbol = document.querySelector("#symbol");
const btn = document.querySelector(".btn");


export default () => {
    btn.addEventListener("click", () => {
        showPass.innerHTML = generate();
    });
};

function generate() {
    const password = generatePass(len.value, number.checked, upper.checked, lower.checked, symbol.checked);
    return password || "Nothing selected";
}