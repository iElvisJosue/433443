// CREAMOS UNA EXPRESION REGULAR PARA EL NOMBRE
const regExpName = /^[a-zA-Z\s]+$/
// CREAMOS UNA EXPRESION REGULAR PARA VALIDAR UN CORREO
const regExpEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
// CREAMOS UNA EXPRESION REGULAR PARA EL NUMERO
const regExpNumber = /^[0-9\s]+$/
// OBTENEMOS TODOS LOS INPUTS DE INFO
const stepInfoInputs = document.querySelectorAll('.Info-Section-Input')
// OBTENEMOS TODOS LOS INPUTS CAUTION
const stepInfoCaution = document.querySelectorAll('.Info-Section-Caution')

export const validationStepInfo = () => {
    let numberValidation = 0

    if(regExpName.test(stepInfoInputs[0].value)){
        numberValidation++
    }else{
        stepInfoInputs[0].classList.add('Caution')
        stepInfoCaution[0].classList.add('Show')
    }
    if(regExpEmail.test(stepInfoInputs[1].value)){
        numberValidation++
    }else{
        stepInfoInputs[1].classList.add('Caution')
        stepInfoCaution[1].classList.add('Show')
    }
    if(regExpNumber.test(stepInfoInputs[2].value)){
        numberValidation++
    }else{
        stepInfoInputs[2].classList.add('Caution')
        stepInfoCaution[2].classList.add('Show')
    }
    return numberValidation === 3 ? true : false
}
stepInfoInputs.forEach((element, index) => {
    element.addEventListener("keyup", () => {
        element.classList.remove('Caution')
        stepInfoCaution[index].classList.remove('Show')
    })
})