//Tipos de dados

//6 tipos de dados

var nome = 'Matheus' // String --> conjunto de caracteres representado por ""(aspas duplas) ''(aspas simples) ``()

var idade = 26 // number

var AssassinsCreedMelhorJogo = true // Boolean --> pode ser representado por true ou false

var tempo; //undefined

var comida = null; // null

var novoObjeto = {} // object

//verificar tipos de dados

const nome_pessoa = 'john'
const idade1 = 30
const MediaFaculdade = 4.5
const legal = true
const notaDematemática = null
let notaDeDesenho;

//verificar tipo de dado
//typeof

console.log(typeof nome_pessoa)
console.log(typeof idade1)
console.log(typeof MediaFaculdade)
console.log(typeof legal)
console.log(typeof notaDematemática)
console.log(typeof notaDeDesenho)

//Objeto

let FaculdadeAlunos = {
    nome_pessoa1: 'André',
    idade3:28,
    MediaFaculdade1: 7.5,
    legal: false,
    notaDematemática: 8,
    notaDeDesenho: 7,
}

console.log(typeof FaculdadeAlunos)
console.log( FaculdadeAlunos)
console.log(FaculdadeAlunos.nome_pessoa1)
console.log(typeof FaculdadeAlunos.nome_pessoa1)

//concatenar (+) strings
const pessoa = 'Irmão do Jorel'
const idade3 = 16;

console.log(pessoa + idade3)
console.log(pessoa + ' '+ idade3)
console.log('meu nome é ' + pessoa + ' e eu tenho ' + idade3)

//concatenar (+) Strings

const aluno = 20
const sobrenome = 30
console.log(aluno+sobrenome)

//Template String
const hello = `Meu nome é ${pessoa} e eu tenho ${idade3} anos`
console.log(hello)

const nome6 = 'vinicius'
const idade6 = '15'

console.log(nome6 + idade6)
console.log('meu nome é ' + nome6 + ' e eu tenho ' + idade6)
console.log('eu tenho ' + idade6 + ' anos')

const nome7 = 'Vinicius'
const sobrenome1 = 'Paz'
console.log(nome7+sobrenome1)

var hora = "It's time"
console.log(hora)

console.log(typeof nome6)
