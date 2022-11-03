//1.0 crie um programa que vai lê vai ler um valor e imprima dizendo se ele é maior ou menor 10.
//const numero = prompt("Digite um valor:")
//const valor = 10


 //if (numero < valor){
   // alert(`${numero} é menor que ${valor}`)
    //console.log(`${numero} é menor que ${valor}`)
 //}else{
    //alert(`${numero} é maior que ${valor}`)
    //console.log(`${numero} é maior que ${valor}`)
 //}

 //2.0 Faça um programa no qual o usuario deve digitar a idade do seu carro. Se for maior que 3 iprima com alert: "seu carro é velho". Se for menor ou igual a 3 anos imprima com alert: "seu carro é novo".

 //const idadecarro = prompt("Digite um valor:")
//const valor1 = 3


 //if (valor1 >= idadecarro){
   // alert(`${idadecarro} Seu carro é novo ${valor1}`)
    //console.log(`${idadecarro} Seu carro é novo ${valor1}`)
 //}else{
    //alert(`${idadecarro} Seu carro é velho  ${valor1}`)
   // console.log(`${idadecarro} Seu carro é velho ${valor1}`)
 

 //const suaidade = prompt("Digite um valor:")
 //const idade = 18


 //if (idade <= suaidade){
   // alert("você pode ir preso")
 //}else{
   // alert("Seus pais serão presos")
 
/*
 const velocidade = prompt("Velocidade do carro")
 const limite = 80 
 let multa = velocidade - limite
 let valor = multa * 5;

 if ( velocidade> limite){
    alert(`Você passou do limite de velocidade. A sua multa é de ${valor}`)
 }else{
    alert("Você está no limite de velocidade")
 }


//condicionais else if
/*
var GraziPossuiGraduacao = true;
var GraziPossuiDoutorado = true;

if (GraziPossuiDoutorado){
   console.log('Possui Graducao e Doutorado')
} else if (GraziPossuiGraduacao){
   console.log('possui graducao, mas não possui doutorado')
} else{
   console.log('não possui graduação')
}
*/
/*
//Categoria x Produto
var categoria = prompt("Digite a categoria do produto")

if (categoria == 1){
   console.log('Preço R$10,00')
}else if (categoria == 2){
   console.log('preço é R$18,00')
}else if (categoria == 3){
   console.log('preço é R$23,00')
}else if (categoria == 4){
   console.log('preço é R$26,00')
}else if (categoria == 5){
   console.log('preço é R$31,00')
}else{
   console.log("Categoria inválida, digite um valor entre 1 e 5!")
}


//Swith e Case
/*
var corFavorita ='Preto'

switch (corFavorita){
   case 'Preto':
      console.log('Yasmin usava calça colorida.')
      break;
   case 'Vermelho':;
      console.log('Yasmin apaixonada')
      break;
   case 'Amarelo'
}
*/

//operadores lógicos &&
// && = e
/*
console.log(true && true) //
console.log(false && true) //
*/

//exercicios

/*
var minhaidade = prompt('Digite a sua idade')

if (minhaidade < 62){
   console.log('sou mais novo')
}
*/

var km = parseInt(prompt("digite a distância que quer percorrer em km"))

if (km <= 200){
   var custo = km * 0.50;
   console.log(custo)
}else if (km > 200){
   var custo2 = km * 0.45
   console.log(custo2)
}
   