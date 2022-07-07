const btn = document.getElementById('btn-atualizar') as HTMLButtonElement;

enum Profissao {
    Atriz,
    Padeiro,
    Development
}

interface Pessoas {
    name: string,
    old: number,
    profisao: Profissao
}

let pessoa1: Pessoas = {
    name: "Maria",
    old: 29,
    profisao: Profissao.Atriz
}

let pessoa2: Pessoas = {
    name: "Roberto",
    old: 19,
    profisao: Profissao.Padeiro
}

let pessoa3: Pessoas = {
    name: "Laura",
    old: 32,
    profisao: Profissao.Atriz
}

let pessoa4: Pessoas = {
    name: "Carlos",
    old: 19,
    profisao: Profissao.Padeiro
}

let pessoa5: Pessoas = {
    name: "Loren",
    old: 24,
    profisao: Profissao.Development
}

let pessoa6: Pessoas = {
    name: "Victor",
    old: 22,
    profisao: Profissao.Development
}

function hanleClickPessoas() {
    console.log(pessoa1);
    console.log(pessoa2);
    console.log(pessoa3);
    console.log(pessoa4);
    console.log(pessoa5);
    console.log(pessoa6);
}

btn?.addEventListener('click', hanleClickPessoas);