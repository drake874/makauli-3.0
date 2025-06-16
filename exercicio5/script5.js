let aleatorio = parseInt(math.randow() *101);
mostraResultado = document.querySelector("#resultado");
jogador;

function pensar() {
    jogador = Number (window.prompt("digite um  numero de 1 a 100"));

    
    if (jogador != aleatorio) {
    if(jogador> aleatorio) {
        mostraResultado.innerHTML += `<p>voce errou, tente um numero menor $(jogador)!</p>`;
    } else {
        mostraResultado.innerHTML += `<p>voce errou, tente um numero maior que $(jogador)!</p>`;
    }
} else {
    mostraResultado.innerHTML += `<p><b>parabens! voce acertou o numero $(aleatorio).</b></p>`;
   } 
}

