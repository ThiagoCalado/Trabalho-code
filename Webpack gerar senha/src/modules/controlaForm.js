import geraSenha from "./gerador";

const senhaGerada = document.querySelector('.senha-gerada')
const qtdChar = document.querySelector('.qtd')
const chkMa = document.querySelector('.chk-ma')
const chkMi = document.querySelector('.chk-mi')
const chkNum = document.querySelector('.chk-num')
const chkSimbol = document.querySelector('.chk-simb')
const gerarSenha = document.querySelector('.gerar-senha')

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gerando()
    })
}

function gerando() {
    const senha = geraSenha(
        qtdChar.value,
        chkMa.checked,
        chkMi.checked,
        chkNum.checked,
        chkSimbol.checked
    )

    return senha || 'Nada foi selecionado'
}