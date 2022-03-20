
/*
case sensitive =reconhecimento de maiusculo e minusculo p palavras reservadas da linguagem)
por tag: getElementByTagName()
por id: getElementById()
por nome: getElementByName()
por classe: getElementsByClassName()
por seletor: querySelector()
*/

let nome = window.document.getElementById('Nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = 
let mapa = querySelector("mapa")


nome.style.width = "100%"
// para verificar o que pega console.log(nome)
email.style.width = "100%"
//para verificar o que pega console.log(email)

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.arivalue.length < 3) {
        txtNome.innerHTML = "Nome invalido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome valido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".")) {
        txtEmail.innerHTML = "E-mail invalido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail valido"
        txtEmail.color = "green"
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Máximo de 100 caracteres"
        txtAssunto.style.backgroundColor = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ("Formulário enviado com sucesso!")
    }else {
        alert ("Preencha o formulário corretamente antes de enviar...")
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}
function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "300px"
}