// OBTENEMOS EL CONTENEDOR DEL CARD
const cardContainer = document.querySelector(".Container__Card")
// OBTENEMOS EL CONTENEDOR DEL MODAL
const modalContainer = document.querySelector(".Container__Modal")
// OBTENEMOS INPUT EMAIL
const inputEmail = document.querySelector(".Form-CheckEmail-Input")
// OBTENEMOS INPUT MENSAJE DE EMAIL INCORRECTO
const textWrongEmail = document.querySelector(".Form-CheckEmail-Text-Caution")
// OBTENEMOS EL BOTON
const formButton =  document.querySelector(".Form-Button")
// CREAMOS UNA EXPRESION REGULAR PARA VALIDAR UN CORREO
const regEx = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 

// AGREGAMOS UNA FUNCION AL BOTON
formButton.addEventListener("click", () => {
    // OBTENEMOS EL VALOR DEL INPUT 
    let inputEmailValue = inputEmail.value
    if(regEx.test(inputEmailValue)){
        showModalSucces(inputEmailValue) 
    }else{
        inputEmail.classList.add("Caution"),
        textWrongEmail.classList.add("Active")
    }
})

// ELIMINAMOS LA CLASE DEL INPUT
inputEmail.addEventListener("keyup", () => {
    inputEmail.classList.remove("Caution"),
    textWrongEmail.classList.remove("Active")
})

function showModalSucces(inputEmailValue) {
    cardContainer.classList.add("Hidde")
    modalContainer.classList.add("Show")
    // OBTENEMOS EL INPUT TEXT DEL EMAIL Y ASIGNAMOS EL VALOR
    const textEmail = document.querySelector(".Text-Email")
    textEmail.innerHTML = inputEmailValue;
}