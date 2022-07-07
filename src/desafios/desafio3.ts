const btnAtualizarSaldo = document.getElementById('btn-atualizar') as HTMLButtonElement;
const btnLimpar = document.getElementById('btn-limpar') as HTMLButtonElement;
const inputSomar = document.getElementById('input-somar')! as HTMLInputElement;
const campoSaldo = document.getElementById('saldo-atual') as HTMLSpanElement;

let saldoAtual = 0;

btnAtualizarSaldo?.addEventListener( 'click', () => {
    somarSaldo(Number(inputSomar.value));
    campoSaldo.innerHTML = saldoAtual.toString();
})

btnLimpar?.addEventListener( 'click', () => {
    saldoAtual = 0;
    campoSaldo.innerHTML = saldoAtual.toString();
})

function somarSaldo(soma: number): number{
    saldoAtual = soma + saldoAtual;
    return saldoAtual;
}