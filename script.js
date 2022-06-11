let sliderElement = document.querySelector('#slider')
let button = document.querySelector('#button')
let sizePassword = document.querySelector('#valor')
let password = document.querySelector('#password')

let containerPassword = document.querySelector('#container-passoword')

let charset = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@1234567889"

let novaSenha = ""

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = sliderElement.value
}

function gerarSenha(){

    
    let pass = ""
    for(let i =0 , n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random()*n))
    }

    containerPassword.style.display = 'block'

   password.innerHTML = pass
   novaSenha = pass
}

function copyPassword(){
    alert("Senha copiada")
    navigator.clipboard.writeText(novaSenha)

}