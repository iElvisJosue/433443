// OBTENEMOS EL BOTON DE MES/AÑO
const buttonPlan = document.querySelector('.Plan-Type-Button')
// OBTENEMOS TODOS LOS PLANES
const typePlan = document.querySelectorAll('.Plan-Options-Item')
// OBTENEMOS TODOS LOS PRECIOS DE PLANES
const pricePlan = document.querySelectorAll('.Item-Details-Price')
// OBTENGO TODAS LAS OFERTAS POR AÑO
const dealsPlan = document.querySelectorAll('.Item-Details-Deal')

// CREAMOS UN ARRAY DE OBJETOS CON LOS PRECIOS
const price = [
    {
        Month: '$9/mo', 
        Year: '$90/yr', 
    },
    {
        Month: '$12/mo', 
        Year: '$120/yr', 
    },
    {
        Month: '$15/mo', 
        Year: '$150/yr', 
    },
]

// EN ESTA VARIABLE ALMACENAREMOS EL TIEMPO DEL PLAN
// QUE FUE SELECCIONADO
export let timePlanSelected = 'Monthly'
// EN ESTA VARIABLE ALMACENAMOS EL ID DEL PLAN
// QUE FUE SELECCIONADO
export let namePlanSelected = ''
// EN ESTA VARIABLE ALMACENAREMSO EL PRECIO DEL PLAN
// QUE FUE SELECCIONADO
export let pricePlanSelected = ''


// CON ESTA FUNCION MANDAMOS EL VALOR
export const validationStepPlan = () => {
    return namePlanSelected ? true : false
}
// RECORREMOS LOS PLANES Y ALMACENAMOS EL ID 
// DEL QUE FUE SELECCIONA
typePlan.forEach(element => {
    element.addEventListener('click', getID =>{
        namePlanSelected = getID.target.getAttribute('id')
        checkPlanSelected(namePlanSelected)
    })
})
// CON ESTA FUNCION VERIFICAREMOS QUE PLAN ESTA SELECCIONADO
const checkPlanSelected = (namePlanSelected) => {
    typePlan.forEach(element => {
        if(element.id === namePlanSelected){
            element.classList.add('Selected')
            pricePlanSelected = element.querySelector('.Item-Details-Price').textContent
        }else{
            element.classList.remove('Selected')
        }
    })
}
// AQUI MOSTRAREMOS EL CONTENIDO DE FORMA DINAMICA
// DEPENDIENDO DE SU SELECCION DE TIEMPO PARA EL PLAN
buttonPlan.addEventListener('click', () => {
    
    buttonPlan.classList.toggle('Active')

    if(buttonPlan.classList.contains('Active')){
        pricePlan.forEach((element, index) => {
            element.innerHTML = price[index].Year
            dealsPlan[index].classList.add('Active')
            timePlanSelected = 'Yearly'
        })
    }else{
        pricePlan.forEach((element, index) => {
            element.innerHTML = price[index].Month
            dealsPlan[index].classList.remove('Active')
            timePlanSelected = 'Monthly'
        })
    }
    
})