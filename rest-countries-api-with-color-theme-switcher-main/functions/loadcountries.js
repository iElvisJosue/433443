/** 
    IMPORTAMOS EL CONTENIDO NECESARIO
**/
import * as allConst from './consts.js'
import { formatPopulation } from './formats.js'
import { getFiltersRegions } from './filtersregion.js'
import { searchSelectedCountrie } from './selectedcountrie.js'
import { checkCountrieObserve } from './observer.js'


/** 
    FUNCIONES PARA ADMINISTRAR
    EL CONTENIDO RELACIONADO
    CON LOS PAISES
**/
// VARIABLES PARA ADMINISTRAR EL CONTENIDO DEL ARRAY
export let startIndex = 0
export let endIndex = 9

// CON ESTA FUNCION REINICIAREMOS LOS VALORES
// DE AMBOS INDEX
export const resetIndexs = () => {
    startIndex = 0
    endIndex = 9
}

// CON ESTA FUNCION OBTENEMOS UN ARREGLO
// CON UN LIMITE DE 20 ELEMENTOS
export const getTenCountries = () => {
    if(endIndex < allConst.countriesFromApi.length){
        const tenCountries = allConst.countriesFromApi.filter((element, index) => {
            if(index >= startIndex && index <= endIndex){
                return element
            }
        })
        showFirstsCountries(tenCountries)
        checkCountrieObserve()
    }
}

// CON ESTA VARIABLE AUMENTAMOS EL VALOR DE
// NUESTROS INDEX EN 20
export const addTenCountries = () => {
    startIndex += 10
    endIndex += 10
}

// CON ESTA FUNCION MOSTRAREMOS TODOS 
// LOS PAISES OBTENIDOS 
export const showFirstsCountries = (partialCountries) => {

    // VACIAMOS EL CONTENEDOR PARA QUE EL CONTENIDO NO SE DUPLIQUE
    // allConst.containerContent.innerHTML = ''

    partialCountries.forEach(countrie => {
        allConst.containerContent.innerHTML += seeCountries(
            countrie.flags.png,
            countrie.name,
            countrie.population,
            countrie.region,
            countrie.capital
        )
    })
    addFunctionToCountrie()
} 

// CON ESTA FUNCION COLOCAREMOS TODAS LAS CIUDADES
// EN EL CONTENEDOR
export const seeCountries = (flag, name, population, region, capital) => {

    const newFlag = flag ? flag : '❌'
    const newName= name ? name: '❌'
    const newPopulation = population ? population : '❌'
    const newRegion = region ? region : '❌'
    const newCapital = capital ? capital : '❌'

    return `
    <article class="Container__Content--Countrie" id="${newName}">
        <figure>
            <img src="${newFlag}" alt="Flag ${newFlag}" class="Container__Content--Countrie--Flag">
        </figure>
        <div class="Container__Content--Countrie--Details">
            <p class="Container__Content--Countrie--Details--Name">
                ${newName}
            </p>
            <p class="Container__Content--Countrie--Details--Population">
                <b>Population:</b> ${formatPopulation(newPopulation)}
            </p>
            <p class="Container__Content--Countrie--Details--Region">
                <b>Region:</b> ${newRegion}
            </p>
            <p class="Container__Content--Countrie--Details--Capital">
                <b>Capital:</b> ${newCapital}
            </p>
        </div>
    </article>
    `
}

// CON ESTA FUNCION ASIGNAMOS FUNCIONES A LOS PAISES
export const addFunctionToCountrie = () => {
    const allCountriesLoaded = document.querySelectorAll('.Container__Content--Countrie')
    allCountriesLoaded.forEach(element => {
        element.addEventListener('click', () => {
            searchSelectedCountrie(element.id)
        })
    })
}

// CON ESTA FUNCIONA REINICIREMOS EL CONTENIDO 
// MOSTRADO DE LOS PAISES
export const resetCountries = () => {
    allConst.containerContent.innerHTML = ''
    resetIndexs()
    getTenCountries()
}

getTenCountries()
getFiltersRegions()