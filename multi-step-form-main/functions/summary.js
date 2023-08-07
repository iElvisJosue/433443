// IMPORTAMOS TODOS LOS DETALLES DEL PLAN SELECCIONADO
import { timePlanSelected, namePlanSelected, pricePlanSelected } from "./plan.js";

// IMPORTAMOS LOS ADDONS SELECCIONADOS
import { selectedAddOns } from './addons.js'

// OBTENEMOS EL CONTENEDOR DEL SUMMARY
const servicesSummary = document.querySelector('.Summary-Services')
// OBTENEMOS EL NOMBRE DEL PLAN SELECCIONADO EN EL SUMMARY
const planNameSummary = document.querySelector('.Plan-Name')
// OBTENEMOS EL PRECIO DEL PLAN SELECCIONADO EN EL SUMMARY
const planPriceSummary = document.querySelector('.Plan-Prize')

// OBTENEMOS EL TEXTO DEL TOTAL SUMMARY 
const totalTextSummary = document.querySelector('.Summary-Total-Text')
// OBTEMOS EL CONTENEDOR DEL PRECIO TOTAL
const totalPriceSummary = document.querySelector('.Service-Total-Prize')

// EN ESTE ARRAY ALMACENAREMOS TODOS LOS PRECIOS
let total = []

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


export const validationStepSummary = () => {
    planNameSummary.innerHTML = `${namePlanSelected} (${timePlanSelected})`
    planPriceSummary.innerHTML = pricePlanSelected

    // VACIAREMOS SIEMPRE EL ARRAY
    total = []   
    // ALMACENAMOS EL PRECIO DEL PLAN
    total.push(Number(pricePlanSelected.replace(/[\W\D]/g, "")))

    checksAddOnsOnSummary()
}

// CON ESTA FUNCION AGREGAREMOS LOS ADDONS AL SUMMARY
const checksAddOnsOnSummary = () => {  

    servicesSummary.innerHTML = ''
    selectedAddOns.forEach(addons => {
        servicesSummary.innerHTML += 
        `
        <div class="Summary-Addons">
            <span class="Summary-Addons-Service">
            ${addons}
            </span>
            <span class="Service-Prize">
            ${checkPriceAddonsSummary(addons)}
            </span>
        </div>
        `
    })
    checkTotalSummary()
}

// CON ESTA FUNCION COLOCAREMOS EL PRECIO A CADA ADDON
const checkPriceAddonsSummary = (addons) => {

    if(timePlanSelected === 'Monthly'){
        if(addons === 'Online service'){
            total.push(Number(price[0].Month.replace(/[\W\D]/g, "")))
            return price[0].Month
        }
        if(addons === 'Larger storage'){
            total.push(Number(price[1].Month.replace(/[\W\D]/g, "")))
            return price[1].Month
        }
        if(addons === 'Customizable profile'){
            total.push(Number(price[2].Month.replace(/[\W\D]/g, "")))
            return price[2].Month
        }
    }else{
        if(addons === 'Online service'){
            total.push(Number(price[0].Year.replace(/[\W\D]/g, "")))
            return price[0].Year
        }
        if(addons === 'Larger storage'){
            total.push(Number(price[1].Year.replace(/[\W\D]/g, "")))
            return price[1].Year
        }
        if(addons === 'Customizable profile'){
            total.push(Number(price[2].Year.replace(/[\W\D]/g, "")))
            return price[2].Year
        }
    }
}

// CON ESTA FUNCION SUMAREMOS TODO
const checkTotalSummary = () => {
    // CREAMOS UN NUEVO NOMBRE DEL TIEMPO DE PLAN
    const newNamePlan = timePlanSelected.replace(/ly/g, '')
    totalTextSummary.innerHTML = `Total (per ${newNamePlan})`
    // SUMAMOS EL TOTAL Y LO ALMACENAMOS
    const totalSummary = total.reduce((a,b) => a + b)
    // COLOCAMOS EL PRECIO TOTAL
    newNamePlan === 'Month' ? totalPriceSummary.innerHTML = `$${totalSummary}/mo` :  totalPriceSummary.innerHTML = `$${totalSummary}/yr`
}