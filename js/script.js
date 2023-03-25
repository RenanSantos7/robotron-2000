const contador = document.querySelectorAll('.controle-contador');
const controles = document.querySelectorAll('.controle-ajuste');

controles.forEach(controle => {
    controle.addEventListener("click", () => {
        let classe = `${controle.classList[1]}`;
        manipulaDados(classe);
    });
});




function zeroEsquerda(numero) {
    if (numero < 10) {
        numero = `${0}${numero}`;
    }
    return numero;
}

function manipulaDados(operacao) {
    if (operacao === "subtrair") {
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