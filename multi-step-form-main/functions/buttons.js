// OBTENEMOS EL BOTON DE NEXT Y BACK
export const buttonNextStep = document.querySelector('.Footer-Button-Next')
export const buttonBackStep = document.querySelector('.Footer-Button-Back')

// CON ESTA FUNCION ADMINISTRAREMOS SI MOSTRAR 
// O NO MOSTRAR EL BOTON DE REGRESAR
export const checkBackButtonStep = (numberOfStep) => {
    if(numberOfStep > 0 ){
        return buttonBackStep.classList.add('Show')
    } 
    return buttonBackStep.classList.remove('Show')
}
// CON ESTA FUNCION ADMINISTRAREMOS EL BOTON DE CONFIRM
export const checkConfirmButtonStep = (numberOfStep) => {
    if(numberOfStep === 3 ){
        buttonNextStep.innerHTML = 'Confirm'
        buttonNextStep.classList.add('Confirm')
    }else{
        buttonNextStep.innerHTML = 'Next Step'
        buttonNextStep.classList.remove('Confirm')
    }
}
// FUNCION PARA VALIDAR TODOS LOS BOTONES
export const checkButtonsStep = (numberOfStep) => {
    checkBackButtonStep(numberOfStep)
    checkConfirmButtonStep(numberOfStep)
}