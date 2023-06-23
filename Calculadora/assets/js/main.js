function Calculadora() {
            this.display = document.querySelector('.display');

            this.iniciar = function() {
                this.clickBotoes();
                this.pressEnter();
            };

            this.clearDisplay = function() {
                this.display.value = '';
            };

            this.apagaUm = function() {
                this.display.value = this.display.value.slice(0, -1);
            };

            this.realizarConta = function() {
                let conta = this.display.value;

                try {
                    conta = eval(conta);

                    if (!conta) {
                        alert('Conta Inválida');
                        return;
                    }
                    this.display.value = String(conta);
                } catch (error) {
                    alert('Conta Inválida');
                    return;
                }
            };

            this.clickBotoes = function() {
                document.addEventListener('click', (e) => {
                    const el = e.target;
                    if (el.classList.contains('btn-num')) {
                        this.mostraNoDisplay(el.innerText);
                    }

                    if (el.classList.contains('btn-clear')) {
                        this.clearDisplay();
                    }

                    if (el.classList.contains('btn-del')) {
                        this.apagaUm();
                    }

                    if (el.classList.contains('btn-eq')) {
                        this.realizarConta();
                    }

                    this.display.focus();
                });
            };

            this.pressEnter = function() {
                this.display.addEventListener('keyup', (e) => {
                    if (e.key === 'Enter') {
                        this.realizarConta();
                    }
                });
            };

            this.mostraNoDisplay = function(valor) {
                this.display.value += valor;
            };
        }

        const calculadora = new Calculadora();
        calculadora.iniciar();
