// Função abaixo

function somDivisiveis(num) {
    let soma = 0;

    for (let i = 1; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            soma += i;
        }
    }

    return soma;
}


//uso facil por navegador com prompt pedindo o numero e imprimindo na tela 

const x = prompt("Informe um numero: ");
const resultado = somDivisiveis(x);
document.getElementById("resultado").innerHTML = `O somatório dos valores divisíveis por 3 ou 5 até ${x} é: ${resultado}`;
