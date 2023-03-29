const controles = document.querySelectorAll('[data-controle]');

controles.forEach(controle => {
    controle.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    });
});

function zeroEsquerda(numero) {
    if (numero < 10) {
        numero = `${0}${numero}`;
    }
    return numero;
}

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");
    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
        
        if (peca.value < 0) {
            peca.value = 0;
        }
        
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
    peca.value = zeroEsquerda(peca.value);
} 