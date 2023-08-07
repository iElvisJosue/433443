// IMPORTAMOS EL TIPO DE TIEMPO EN EL PLAN
import { timePlanSelected } from './plan.js'

// OBTENEMOS LOS INPUT CHECKBOX
const checksAddOns = document.querySelectorAll('.Check-Online, .Check-Storage, .Check-Customizable')

// OBTENEMOS LOS PRECIOS DE ADDONS
const priceAddOns = document.querySelectorAll('.Addons-Section-Prize')

// CREAMOS UN ARRAY CON LOS ADDONS SELECCIONADOS
export let selectedAddOns = []

// CREAMOS UN ARRAY DE OBJETOS CON LOS PRECIOS
const price = [
    {
        Month: '+$1/mo', 
        Year: '+$10/yr', 
    },
    {
        Month: '+$2/mo', 
        Year: '+$20/yr', 
    },
    {
        Month: '+$2/mo', 
        Year: '+$20/yr', 
    },
]

export const validationStepAddons = () => {
    selectedAddOns = []
    checksAddOns.forEach(element => {
        element.checked ? selectedAddOns.push(element.id) : false
    })
}


// CON ESTA FUNCION MOSTRAREMOS LOS PRECIOS DE
// A CUERDO AL PLAN DE TIEMPO SELECIONADO
export const validationTimeAddon = () => {
    if(timePlanSelected === 'Monthly'){
        priceAddOns.forEach((element, index) => {
            element.innerHTML = price[index].Month
        })
    }else{
        priceAddOns.forEach((element, index) => {
            element.innerHTML = price[index].Year
        })
    }
}