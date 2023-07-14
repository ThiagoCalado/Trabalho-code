class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e =>{
            this.manipulaSubmit(e);
        });
    }

    manipulaSubmit(e){
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();

        if (camposValidos) {
            alert('Formulario enviado');
            this.formulario.submit();
        }
    }

    camposSaoValidos(){
        let valid = true;

        for(let erroText of this.formulario.querySelectorAll('.erro-text')){
            erroText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerHTML;

            if (!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar branco`)
                valid=false
            }

            if (campo.classList.contains('cpf')) {
                if(!this.validaCpf(campo)) valid = false;
            }

            if (campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;

        if (usuario.length < 6 || usuario.length > 22) {
            this.criaErro(campo, 'Usuario precisa ter entre 6 e 22 caracteres');
            valid =false;
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou numeros');
            valid = false;
        }

        return valid
    }

    validaCpf(campo){
        const cpf = new ValidaCpf(campo.value);

        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF invalido');
            return false;
        }

        return true;
    }

    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('erro-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();