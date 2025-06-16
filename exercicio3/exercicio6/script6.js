let inscritos = 0
mostraResultado = document.querySelector("#resultado");

function inscrever(){
    inscritos++;
    times = parseInt(inscritos / 3);

    mostraResultado.innerHTML = `<p>numero de inscritos: ${inscritos}`;

    if(times >=4){
      
     alert("ja e possivel iniciar o campeonato, pois temos 4 equipes!")
    
    }
}