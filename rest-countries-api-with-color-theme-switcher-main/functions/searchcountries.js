import { inputSearchCountrie, inputSearchClear, countriesFromApi, containerContent } from "./consts.js"
import { seeCountries, addFunctionToCountrie, resetCountries } from './loadcountries.js'

/** 
    FUNCIONES PARA FILTRAR 
    LAS CIUDADES CON LOS 
    INPUTS
**/

// ASIGNAMOS UNA FUNCION AL INPUT SEARCH
// LA CUAL HACE UNA BUSQUEDA EN TIEMPO REAL
inputSearchCountrie.addEventListener('keyup', () => {
    const inputSearchValue = inputSearchCountrie.value
    filterCountriesBySearch(inputSearchValue)
})
// ASIGNAMOS UNA FUNCION EL ICONO DE LIMPIAR 
// EL CUAL ELIMINA CUALQUIER BUSCADA ESCRITA EN EL INPUT
inputSearchClear.addEventListener('click', () => {
    inputSearchCountrie.value = ''
    inputSearchClear.classList.remove('Show')
    resetCountries()
})


// CON ESTA FUNCION FILTRAMOS LOS PAISES POR SU NOMBRE DE BUSQUEDA
const filterCountriesBySearch = (searching) => {
    const nameCountrie = searching
    if(nameCountrie.length > 0){
        countriesFromApi.forEach(countrieName => {
            if(countrieName.name.toLowerCase().startsWith(nameCountrie.toLowerCase())){
                inputSearchClear.classList.add('Show')
                containerContent.innerHTML = seeCountries(
                    countrieName.flags.png,
                    countrieName.name,
                    countrieName.population,
                    countrieName.region,
                    countrieName.capital
                )
            }
        })
        addFunctionToCountrie()
    }
}
