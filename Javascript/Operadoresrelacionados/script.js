//Boolean

//Existem dois valores booleanos fals ou true
var LulaEleito = false
//var LulaEleito = true

if (LulaEleito){
    console.log('vamos comer picanha')
}else{
    console.log("Bolsonaro vai criar o pix")
}

//Operadores relacionados

/*
    == -> igualdade
    >  -> maior que
    <  -> menor
    != -> diferente
    >= -> maior ou igual
    <= -> menor ou igual
*/

var a = 1,
    b = 5,
    c = 2,
    d = 1;

console.log(a > b)//false
console.log(a < b)//true
console.log(a == d)//true
console.log(b >= a)//true
console.log(c <= b)//true
console.log(d != a)//false
console.log(d != b)//true


//condições
/*
    if e else
    if é condição verdadeira ("se for verdade ...")
    else é a condição falsa (" Se não ..... é falsa")
    if (condição){
        bloco verdadeiro
    }else{
        bloco falso
    }
    */

   // var graziFazFaculdade = true
    //if (graziFazFaculdade){
      //  console.log("Grazi vai se formar")
    //} else{
      //  console.log("Grazi não faz faculdade")
    

    let valor1 = 5,
        valor2 = 7,
        valor3 = 5,
        valor4 = 2;

    if (valor1 > valor2){
        console.log("valor1 é maior que valor2")
    }else{
        console.log("valor1 não é maior que valor2")
    }

    if (valor2 != valor4){
        console.log("valor2 é diferente do valor4")
    }else{
        console.log("valor2 não é diferente do valor4")
    }

    const nome = prompt('Digite o seu nome:')
    console.log(nome)

    
        
        