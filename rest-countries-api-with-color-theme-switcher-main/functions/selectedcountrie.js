/** 
    IMPORTAMOS EL CONTENIDO NECESARIO
**/
import * as allConst from "./consts.js"
import { formatPopulation, formatLanguages, formatCountriesBorder } from "./formats.js"

// CON ESTA FUNCION BUSCAREOS LA CIUDAD
// QUE FUE SELECCIONADA PARA VISUALIZAR
export const searchSelectedCountrie = name => {
    allConst.body.classList.add('Show')
    const selectedCountrie = allConst.countriesFromApi.filter(element => {
        return element.name === name ? element : false
    })
    setCountrieSelected(selectedCountrie)
}
// CON ESTA FUNCION COLOCAREMOS LA INFORMACION
// DE LA CIUDAD QUE FUE SELECCIONADA
const setCountrieSelected = selectedCountrie => {

    const newNativeNameInSelected = selectedCountrie[0].nativeName ? selectedCountrie[0].nativeName : '❌'
    const newPopulationInSelected = selectedCountrie[0].population ? selectedCountrie[0].population : '❌'
    const newRegionInSelected = selectedCountrie[0].region ? selectedCountrie[0].region : '❌'
    const newSubRegionlInSelected = selectedCountrie[0].subregion ? selectedCountrie[0].subregion : '❌'
    const newCapitalInSelected = selectedCountrie[0].capital ? selectedCountrie[0].capital : '❌'
    const newDomainInSelected = selectedCountrie[0].topLevelDomain ? selectedCountrie[0].topLevelDomain : '❌'
    const newCurrenciesInSelected = selectedCountrie[0].currencies ? selectedCountrie[0].currencies[0].name : '❌'
    const newLanguagesInSelected = selectedCountrie[0].languages ? selectedCountrie[0].languages : '❌'
    
    allConst.selectedCountrieFlag.src = selectedCountrie[0].flags.svg
    allConst.selectedCountrieName.innerHTML = selectedCountrie[0].name
    allConst.selectedCountrieNativeName.innerHTML = `<b>Native Name:</b> ${newNativeNameInSelected}`
    allConst.selectedCountriePopulation.innerHTML = `<b>Population:</b> ${formatPopulation(newPopulationInSelected)}`
    allConst.selectedCountrieRegion.innerHTML = `<b>Region:</b> ${newRegionInSelected}`
    allConst.selectedCountrieSubRegion.innerHTML = `<b>Sub Region:</b> ${newSubRegionlInSelected}`
    allConst.selectedCountrieCapital.innerHTML = `<b>Capital:</b> ${newCapitalInSelected}`
    allConst.selectedCountrieDomain.innerHTML = `<b>Top Level Domain:</b> ${newDomainInSelected}`
    allConst.selectedCountrieCurrencies.innerHTML = `<b>Currencies:</b> ${newCurrenciesInSelected}`
    allConst.selectedCountrieLanguaje.innerHTML = `<b>Languages:</b> ${formatLanguages(newLanguagesInSelected)}`
    formatCountriesBorder(selectedCountrie[0].borders)
}