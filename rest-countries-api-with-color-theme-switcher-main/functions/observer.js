import { getTenCountries, addTenCountries, endIndex } from "./loadcountries.js"
import { countriesFromApi } from "./consts.js"

// CREAMOS NUESTRA API DE INTERSECTIONOBSERVER
const observerCountries = new IntersectionObserver(loadContentCountriesObserve, {
    root: null,
    //LE AGREGAMOS UN MARGIN BOTTOM PARA QUE NO SE EJECUTE NADA MÁS ENTRAR AL VIEWPORT
    rootMargin: '0px', 
    //EJECUTAMOS UNICAMENTE CUANDO EL ELEMENTO ENTRE COMPLETAMENTE
    threshold: .5
})

//RECORREMOS NUESTRO ARRAY Y LOS MANDAMOS A NUESTRA FUNCION
export const checkCountrieObserve = () => {
    const countries = document.querySelectorAll('.Container__Content--Countrie')
    observerCountries.observe(countries[endIndex])
}

function loadContentCountriesObserve(countriesObs){
    if(endIndex < countriesFromApi.length){
        //RECORREMOS EL ELEMENTOS OBSERVADO
        countriesObs.forEach((currentlyCountrie) => {
            //VERIFICAMOS SI EL ELEMENTO ESTA SIENDO OBSERVADO
            if(currentlyCountrie.isIntersecting){
                addTenCountries()
                getTenCountries()
            }
        })
    }
}