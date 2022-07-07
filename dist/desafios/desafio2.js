"use strict";
const btn = document.getElementById('btn-atualizar');
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
    Profissao[Profissao["Development"] = 2] = "Development";
})(Profissao || (Profissao = {}));
let pessoa1 = {
    name: "Maria",
    old: 29,
    profisao: Profissao.Atriz
};
let pessoa2 = {
    name: "Roberto",
    old: 19,
    profisao: Profissao.Padeiro
};
let pessoa3 = {
    name: "Laura",
    old: 32,
    profisao: Profissao.Atriz
};
let pessoa4 = {
    name: "Carlos",
    old: 19,
    profisao: Profissao.Padeiro
};
let pessoa5 = {
    name: "Loren",
    old: 24,
    profisao: Profissao.Development
};
let pessoa6 = {
    name: "Victor",
    old: 22,
    profisao: Profissao.Development
};
function hanleClickPessoas() {
    console.log(pessoa1);
    console.log(pessoa2);
    console.log(pessoa3);
    console.log(pessoa4);
    console.log(pessoa5);
    console.log(pessoa6);
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', hanleClickPessoas);
