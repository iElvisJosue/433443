// OBTENEMOS TODOS LOS NUMEROS DE LOS PASOS
const currentStep = document.querySelectorAll('.Container__Card-Steps-List-Number')
// OBTENEMOS EL TITULO DEL PASO
const titleStep = document.querySelector('.Container__Card-Forms-Title')
// OBTENEMOS LOS DETALLES DEL PASO 
const detailsStep = document.querySelector('.Container__Card-Forms-Details')
// OBTENEMOS TODOS LOS FORMULARIOS DEL COTENIDO PRICIPAL
const contentStep = document.querySelectorAll('.Container__Card-Forms-Info, .Container__Card-Forms-Plan, .Container__Card-Forms-Addons, .Container__Card-Forms-Summary, .Container__Card-Forms-Modal')


// CREAMOS UN ARRAY DE OBJETOS EN EL CUAL
// ALMACENAREMOS EL CONTENIDO DE CADA STEP
const contentStepDetails = [ 
    {
        title: 'Personal Info',
        details: 'Please provide your name, email address, and phone number.'
    },
    {
        title: 'Select your plan',
        details: 'You have the option of monthly or yearly billing.'
    },
    {
        title: 'Pick add-ons',
        details: 'Add-ons help enhance your gaming experience.'
    },
    {
        title: 'Finishing up',
        details: 'Double-check everything looks OK before confirming'
    },
]


// CON ESTA FUNCION CAMBIAREMOS LA CLASE
// AL NUMERO DEL PASO
export const checkCurrentStep = (numberOfStep) => {
    // ASIGNAMOS LA CLASE AL PASO ACTUAL
    currentStep.forEach((element, index) => {
        if(numberOfStep === index){
            return element.classList.add('Active')
        }
        return element.classList.remove('Active')
    })
    // CAMBIAREMOS EL HEADER DEL PASO ACTUAL
    setHeaderStep(numberOfStep)
}   
// CON ESTA FUNCION CAMBIAREMOS EL CONTENIDO
// DEL HEADER (TITULO Y DETALLES)
const setHeaderStep = (numberOfStep) => {
    // ASIGNAMOS EL TITULO DEL STEP
    titleStep.innerHTML = contentStepDetails[numberOfStep].title
    // ASIGNAMOS LOS DETALLES DEL STEP
    detailsStep.innerHTML = contentStepDetails[numberOfStep].details
    // CAMBIAREMOS EL CONTENIDO PRINCIPAL DEL PASO ACTUAL
    setContentStep(numberOfStep)
}
// CON ESTA FUNCION CAMBIAREMOS EL CONTENIDO
// PRINCIPAL DEL PASO ACTUAL
const setContentStep = (numberOfStep) => {
    contentStep.forEach((element, index) => {
        if(numberOfStep === index){
            return element.classList.add('Show')
        }
        return element.classList.remove('Show')
    })
}