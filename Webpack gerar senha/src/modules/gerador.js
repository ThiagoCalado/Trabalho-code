const rand = (min,max) => Math.floor(Math.random() * (max - min) + min);
const geraMai = () => String.fromCharCode(rand(65,91));
const geraMinu = () => String.fromCharCode(rand(97,123));
const geraNumeros = () => String.fromCharCode(rand(48,58));
const simbolos = '!@#$%¨&*()_-=+[]{}~^;:.,\|/-+?°£ªº';
const geraSimbolos = () => simbolos[rand(0,simbolos.length)];

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos){
    const arraySenha = []
    qtd = Number (qtd)

    for (let i = 0; i <= qtd; i++) {
        maiusculas && arraySenha.push(geraMai())
        minusculas && arraySenha.push(geraMinu())
        numeros && arraySenha.push(geraNumeros())
        simbolos && arraySenha.push(geraSimbolos())
    }

    return arraySenha.join('').slice(0,qtd)
}