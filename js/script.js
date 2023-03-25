const braco = document.querySelector('#braco');
const contador = document.querySelectorAll('.controle-contador');
const controles = document.querySelectorAll('.controle-ajuste');

controles.forEach(controle => {
    controle.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent);
    });
});

function zeroEsquerda(numero) {
    if (numero < 10) {
        numero = `${0}${numero}`;
    }
    return numero;
}

function manipulaDados(operacao) {
    if (operacao === "-") {
        braco.value = parseInt(braco.value) - 1;
        
        if (braco.value < 0) {
            braco.value = 0;
        }
        
        braco.value = zeroEsquerda(braco.value);

    } else {
        braco.value = parseInt(braco.value) + 1;
        braco.value = zeroEsquerda(braco.value);
    }
} 