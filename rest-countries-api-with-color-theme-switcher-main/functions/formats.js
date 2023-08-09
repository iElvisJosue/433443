/** 
    IMPORTAMOS EL CONTENIDO NECESARIO
**/
import { countriesFromApi, selectedCountrieBorderButtons } from './consts.js'
import { searchSelectedCountrie } from './selectedcountrie.js'

// CON ESTA FUNCION LE DAREMOS FORMATO A LA CANTIDAD
// DE POBLACION
export const formatPopulation = population => {
    let newPopulation = String(population).split('')
    for(let i = 3; i < newPopulation.length; i += 4){
        newPopulation.splice(newPopulation.length - i, 0, ',')
    }
    return newPopulation.join('')
}
// CON ESTA FUNCION LE DAREMOS FORMATO A LA CANTIDAD
// DE LENGUAJES
export const formatLanguages = countrieLanguage => {
    const newLanguage = countrieLanguage.map(language => {
        return language.name
    })
    return newLanguage.join((', '))
}
// CON ESTA FUNCION LE DAREMOS FORMATO A LA CANTIDAD
// DE BOTONES POR PAISES EN EL BORDE
export const formatCountriesBorder = countriesBorders => {
    selectedCountrieBorderButtons.innerHTML = ''
    let currentIndex = 0

    if(countriesBorders){
        countriesFromApi.forEach(allcountries => {
            if(allcountries.alpha3Code === countriesBorders[currentIndex]){
                currentIndex++
                selectedCountrieBorderButtons.innerHTML += 
                `
                    <button class="Container__Countrie--Details--Border--Button" id="${allcountries.name}">
                        ${allcountries.name}
                    </button>
                `
            }
        })
        setFunctionToCountriesBorder()
    }else{
        return selectedCountrieBorderButtons.innerHTML = '❌'
    }
}

// CON ESTA FUNCION ASIGNAMOS FUNCIONALIDAD A LOS 
// PAISES EN EL BORDE
const setFunctionToCountriesBorder = () => {
    const buttonCountriesBorder = document.querySelectorAll('.Container__Countrie--Details--Border--Button')
    buttonCountriesBorder.forEach(element => {
        element.addEventListener('click', () => {
            searchSelectedCountrie(element.id)
        })
    })
}