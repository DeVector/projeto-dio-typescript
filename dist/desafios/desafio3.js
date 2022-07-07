"use strict";
const btnAtualizarSaldo = document.getElementById('btn-atualizar');
const btnLimpar = document.getElementById('btn-limpar');
const inputSomar = document.getElementById('input-somar');
const campoSaldo = document.getElementById('saldo-atual');
let saldoAtual = 0;
btnAtualizarSaldo === null || btnAtualizarSaldo === void 0 ? void 0 : btnAtualizarSaldo.addEventListener('click', () => {
    somarSaldo(Number(inputSomar.value));
    campoSaldo.innerHTML = saldoAtual.toString();
});
btnLimpar === null || btnLimpar === void 0 ? void 0 : btnLimpar.addEventListener('click', () => {
    saldoAtual = 0;
    campoSaldo.innerHTML = saldoAtual.toString();
});
function somarSaldo(soma) {
    saldoAtual = soma + saldoAtual;
    return saldoAtual;
}
