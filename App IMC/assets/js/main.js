function pegarInfos() {
    const form = document.querySelector(".form");

    const resultado = document.querySelector(".resultado")

    function recebeEvento(evento) {
        evento.preventDefault();
        const altura = form.querySelector('#altura');
        const peso = form.querySelector('#peso');
        const imc = peso / (altura * altura);

        if (imc < 24) {
            console.log("peso esta normal");
        }
        else if (imc < 17) {
            console.log("peso esta baixo do normal");
        }
        else if (imc > 25) {
            console.log('esta com sobrepeso');
        }
        else if (imc > 29) {
            console.log('esta com Obesos: Classe I');
        }
        else if (imc > 34) {
            console.log('esta com Obesos: Classe II');
        }
        else if (imc > 40) {
            console.log('esta com Obesos: Classe III');
        }
        resultado = imc
        
        console.log(resultado)
        
    }

    form.addEventListener('submit', recebeEvento);
}
pegarInfos()
