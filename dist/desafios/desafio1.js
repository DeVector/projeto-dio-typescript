"use strict";
const button = document.getElementById('btn-atualizar');
button === null || button === void 0 ? void 0 : button.addEventListener('click', handleClick);
function handleClick() {
    console.log(employer);
    console.log(employer1);
}
let employer = {
    code: 1,
    name: "Victor"
};
let employer1 = {
    code: 10,
    name: "John"
};
