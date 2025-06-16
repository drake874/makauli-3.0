function media() {
    let nota1 = Number(window.prompt)("Digite a primeira nota: ");
    let nota2 = Number(window.prompt)("Digite a segunda nota: ");
    let nota3 = Number(window.prompt)("Digite a terceira nota: ");
    let media = (nota1 + nota2 + nota3) / 3; 


let resultado= document.querySelector('#resultado');
resultado.innerHTML = `<p>O resultado é ${media}</p>`;
console.log('#resultado');

    if( nota > 60) {
        alert("voce esta aprovado, sua nota é"+resultado);
    }

    if( nota == 60) {
        alert("voce esta aprovado, sua nota é"+aprovado);
    }

    else {
        alert("voce esta reprovado, sua nota é"+resultado);
    }

     console.log(resultado);

}