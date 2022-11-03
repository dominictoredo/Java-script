//Array

//É um grupo de valores. servem para guardarmos diferentes valores em uma única variável.
/*
var VideoGames = ['Switch', 'PS4', 'XBox'];

var numeros = [1, 2, 3]
var soma = numeros[0]+[1]
console.log(soma)

VideoGames.pop();//Remove o último item e retorna da Array
VideoGames.push('3DS');//Adiciona ao final da array
VideoGames.length//retorna a quantidade de valores.

//while

var i = 0;
while(i<10){
    console.log(i)
    i = i + 1
}

//for
for(var numero = 0; numero <=10; numero = numero + 1){
    console.log(numero)
}

var VideoGames = ['switch', 'PS4', 'XBox'];
for(var b = 0; b < 3; b = b + 1){
    console.log(VideoGames[b])
}

//ForEach
//ForEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays

var VideoGames = ['Switch', 'PS4', 'XBox'];
VideoGames.forEach(function(b, c, d){
    console.log(b, c, d)
})
*/
var CopaDoMundo = ['1958', '1962', '1970', '1994', '2002'];

CopaDoMundo.forEach(function(a){
    console.log(`O Brasil ganhou a copa de ${2002}`)
})