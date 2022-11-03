const inputelement = document.querySelector('.new-tasks-input')
const addtaksbutton = document.querySelector('.new-taks-button')
const taskcontainer = document.querySelector('.tasks-container')

function validarbutao(){
    if(inputelement.value === ''){
        inputelement.classList.add('erro')
    }else{
        inputelement.classList.remove('erro')
        const texto = document.createElement('p')
        texto.innerText = inputelement.value
        
        taskcontainer.appendChild(texto)
    }
   
}

addtaksbutton.addEventListener('click', validarbutao)