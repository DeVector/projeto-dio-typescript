const button = document.getElementById('btn-atualizar') as HTMLButtonElement;

button?.addEventListener( 'click', handleClick);


function handleClick(){
    console.log(employer);
    console.log(employer1)
}

interface Pessoa {
    code: number,
    name: string
}

let employer: Pessoa = {
    code: 1,
    name: "Victor"
};

let employer1: Pessoa = {
    code: 10,
    name: "John"
};