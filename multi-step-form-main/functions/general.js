import { checkCurrentStep } from './contents.js';
import { validationStepInfo } from './info.js'
import { validationStepPlan } from './plan.js'
import { validationStepAddons, validationTimeAddon } from './addons.js'
import { validationStepSummary } from './summary.js'
import { clearContentStep } from './modal.js'
import { buttonBackStep, buttonNextStep, checkButtonsStep, checkBackButtonStep, checkConfirmButtonStep } from './buttons.js'


// CREAMOS LA VARIABLE QUE NOS DIRA EN QUE PASO ESTAMOS
let numberOfStep = 0

// OBTENEMOS EL BOTON DE CHANGE, EL CUAL NOS PERMITE REGRESAR A LOS PLANES
const changePlan = document.querySelector('.Plan-Change')

// CON ESTA FUNCION VOLVEREMOS A PLANES
changePlan.addEventListener('click', () => {
    numberOfStep = 1
    checkCurrentStep(numberOfStep)
})

// EJECUTAMOS LA FUNCION NADAMAS ENTRAR
checkCurrentStep(numberOfStep)


// CON ESTA FUNCION VALIDAREMOS EL CONTENIDO DE CADA STEP
buttonNextStep.addEventListener('click', () => {
    switch (numberOfStep) {
        case 0:
            validationStepInfo() ? stepValidationCompleted() : false
            break;
        case 1:
            validationStepPlan() ? (stepValidationCompleted(), validationTimeAddon()) : false
            break;
        case 2:
            stepValidationCompleted()
            validationStepAddons()
            validationStepSummary()
            checkConfirmButtonStep(numberOfStep)
            break;
        case 3:
            clearContentStep() 
            break;
        default:
            break;
    }
})

const stepValidationCompleted = () => {
    numberOfStep++
    checkCurrentStep(numberOfStep)
    checkBackButtonStep(numberOfStep)
}
// CON ESTA FUNCION DISMINUIMOS EL VALOR
// DE LA VARIABLE QUE NOS PERMITE COLOCARNOS
// EN UNO U OTRO PASO
buttonBackStep.addEventListener('click', () => {
    // AUMENTAMOS NUESTRA VARIBALE A UN MAXIMO DE 5
    numberOfStep >= 0 ? numberOfStep-- : false
    checkButtonsStep(numberOfStep)
    checkCurrentStep(numberOfStep)
})