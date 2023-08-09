/** 
    IMPORTAMOS EL CONTENIDO NECESARIO
**/
import { countriesFromApi, inputRegionFilter, containerContent } from "./consts.js"
import { seeCountries, resetCountries, addFunctionToCountrie } from './loadcountries.js'

// CON ESTA FUNCION OBTENDREMOS LAS REGIONES EN LOS FILTROS
export const getFiltersRegions = () => {
    const allRegions = countriesFromApi.map(element => {
        return element.region
    })
    setFiltersRegions([...new Set(allRegions)])
}
// CON ESTA FUNCION MOSTRAREMOS LAS REGIONES EN LOS FILTROS
const setFiltersRegions = arrRegions => {
    arrRegions.forEach(listRegion => {
        inputRegionFilter.innerHTML += 
        `
        <li id="${listRegion}" class='Container__Inputs--Filter--Region--Li'>${listRegion}</li>
        `
    })
    addFunctionToFiltersByRegion()
}

// CON ESTA FUNCION FILTRAMOS LOS PAISES POR SU REGION
const filterCountriesByRegion = region => {
    containerContent.innerHTML = ''
    countriesFromApi.forEach(countrieRegion => {
        if(countrieRegion.region === region){
            containerContent.innerHTML += seeCountries(
                countrieRegion.flags.png,
                countrieRegion.name,
                countrieRegion.population,
                countrieRegion.region,
                countrieRegion.capital
            )
        }
    })
    addFunctionToFiltersAllByRegion()
    addFunctionToCountrie()
}

// CON ESTA FUNCION ASIGNAMOS FUNCIONES A LOS FILTROS POR REGION
const addFunctionToFiltersByRegion = () => {
    // OBTENEMOS TODOS LOS LI CON LAS REGIONES
    const allLi = document.querySelectorAll('.Container__Inputs--Filter--Region--Li')
    allLi.forEach(element => {
        element.addEventListener('click', () => {
            filterCountriesByRegion(element.id)
            hiddeFilterList()
            
        })
    })
}

// CON ESTA FUNCION ASIGNAMOS FUNCIONES A LOS FILTROS POR REGION
const addFunctionToFiltersAllByRegion = () => {
    // OBTENEMOS EL LI QUE FILTRARA POR TODAS LAS REGIONES
    const filterAllRegions = document.getElementById('allRegions')
    filterAllRegions.addEventListener('click', () => {
        resetCountries()
    })
}

