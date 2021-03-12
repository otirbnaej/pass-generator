const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generateNum = () => String.fromCharCode(rand(48, 58));
const generateUpper = () => String.fromCharCode(rand(65, 90));
const generateLower = () => String.fromCharCode(rand(97, 122));
const symbol = "!@#$%¨&*()-_+´`{[}]^~:;>.?/|\"'";
const generateSymbol = () => symbol[rand(0, symbol.length)];

export default function generatePass(len, number, upper, lower, symbol) {
    const password = [];
    len = Number(len);

    for (let i = 0; i < len; i++) {
        upper && password.push(generateUpper());
        number && password.push(generateNum());
        lower && password.push(generateLower());
        symbol && password.push(generateSymbol());
    }

    return password.join('').slice(0, len);
}