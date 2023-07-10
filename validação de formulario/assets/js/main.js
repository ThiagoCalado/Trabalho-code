class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.manipulaSubmit(e);
        });
    }

    manipulaSubmit(e) {
        e.perventDefault();
        const camposValidos = this.camposSaoValidos();

        //
        if (camposValidos) {
            alert('Formulario enviado');
            this.formulario.submit();
        }
    }

    camposSaoValidos() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.erro-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;

            if (!campo.value) {
                this.criarErro(campo, `Campo "${label}" não pode estar em branco.`);
                valid = false
            }

        }

        return valid;
    }


    criarErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElemnt('afterend', div);
    }
}

const valida = new ValidaFormulario();