function criaCalculadora(){
    return{
        display: document.querySelector('.display'),

        iniciar(){
            this.clickBotoes();
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        realizarConta(){
            let conta = this.display.value;
            
            try {
                conta = eval(conta);

                if(!conta){
                    alert('Conta Inválida');
                    return;
                }
                this.display.value = String(conta)
            } catch (error) {
                alert('Conta Inválida');
                return;
            }
        },

        clickBotoes(){
            document.addEventListener('click', (e) =>{
                const el = e.target;
                if (el.classList.contains('btn-num')){
                    this.mostraNoDisplay(el.innerText);
                }
                
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                
                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizarConta();
                }

                this.display.focus();
            })
        },
        
        pressEnter() {
                    this.display.addEventListener('keyup', (e) => {
                        if (e.key === 'Enter') {
                            this.realizarConta();


        mostraNoDisplay(valor){
            this.display.value += valor;
        }
    }

}

const calculadora = criaCalculadora();
calculadora.iniciar();
