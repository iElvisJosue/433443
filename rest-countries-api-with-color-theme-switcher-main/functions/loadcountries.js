/** 
    CONSTANTES PARA
    EL CONTENIDO DE LAS
    CIUDADES
**/

// OBTENEMOS EL BODY
const body = document.body
// OBTENEMOS EL CONTENEDOR DONDE SE MOSTRARAN LOS PAISES
const containerContent = document.querySelector('.Container__Content')
// OBTENEMOS EL CONTENEDOR DONDE SE MOSTRARA LA INFORMACION
// DETALLADA DEL PAIS
const containerCountrie = document.querySelector('.Container__Countrie')


/** 
    CONSTANTES PARA
    EL CONTENIDO DE LA
    CIUDAD SELECCIONADA
**/
// OBTENEMOS EL CONTENEDOR DE LA BANDERA DE LA CIUDAD SELECCIONADA
const selectedCountrieFlag = document.querySelector('.Container__Countrie--Details--Image-Flag')
// OBTENEMOS EL CONTENEDOR DEL NOMBRE DE LA CIUDAD SELECCIONADA
const selectedCountrieName = document.querySelector('.Container__Countrie--Details--Text--Name')
// OBTENEMOS EL CONTENEDOR DEL NOMBRE NATIVO DE LA CIUDAD SELECCIONADA
const selectedCountrieNativeName = document.querySelector('.Container__Countrie--Details--Data--Left--Native')
// OBTENEMOS EL CONTENEDOR DE LA POBLACION DE LA CIUDAD SELECCIONADA
const selectedCountriePopulation = document.querySelector('.Container__Countrie--Details--Data--Left--Population')
// OBTENEMOS EL CONTENEDOR DE LA REGION DE LA CIUDAD SELECCIONADA
const selectedCountrieRegion = document.querySelector('.Container__Countrie--Details--Data--Left--Region')
// OBTENEMOS EL CONTENEDOR DE LA SUBREGION DE LA CIUDAD SELECCIONADA
const selectedCountrieSubRegion = document.querySelector('.Container__Countrie--Details--Data--Left--SubRegion')
// OBTENEMOS EL CONTENEDOR DE LA CAPITAL DE LA CIUDAD SELECCIONADA
const selectedCountrieCapital = document.querySelector('.Container__Countrie--Details--Data--Left--Capital')
// OBTENEMOS EL CONTENEDOR DEL DOMINIO DE LA CIUDAD SELECCIONADA
const selectedCountrieDomain = document.querySelector('.Container__Countrie--Details--Data--Right--Domain')
// OBTENEMOS EL CONTENEDOR DE LA MONEDA DE LA CIUDAD SELECCIONADA
const selectedCountrieCurrencies = document.querySelector('.Container__Countrie--Details--Data--Right--Currencies')
// OBTENEMOS EL CONTENEDOR DE LOS IDIOMAS DE LA CIUDAD SELECCIONADA
const selectedCountrieLanguaje = document.querySelector('.Container__Countrie--Details--Data--Right--Languajes')
// OBTENEMOS EL CONTENEDOR DE LOS BOTONES DE LA CIUDAD SELECCIONADA
const selectedCountrieBorderButtons = document.querySelector('.Container__Countrie--Details--Border--Buttons')
// OBTENEMOS EL INPUT SEACH
const inputSearchCountrie = document.querySelector('.Container__Inputs--Search--Text')
// OBTENEMOS EL ICONO DE CERRAR LIMPIAR BUSQUEDA
const inputSearchClear = document.querySelector('.Container__Inputs--Search--Clear')
// OBTENEMOS EL INPUT CON LOS FILTROS POR REGION
const inputRegionFilter = document.querySelector('.Container__Inputs--Filter--Region')

/** 
    FUNCIONES PARA ADMINISTRAR
    EL CONTENIDO RELACIONADO
    CON LOS PAISES
**/

// VARIABLE QUE ALMACENARA LAS CIUDADES
let countries

// CON ESTA FUNCION OBTENEMOS TODOS LOS PAISES DE LA API LOCAL
async function loadCountries() {
    const response = await fetch('https://raw.githubusercontent.com/iElvisJosue/Frontend_Mentor_Challenges/main/rest-countries-api-with-color-theme-switcher-main/api/data.json')
    countries = await response.json()

    showAllCountries()
    getFiltersRegions()
}
// CON ESTA FUNCION OBTENDREMOS LAS REGIONES EN LOS FILTROS
const getFiltersRegions = () => {
    const allRegions = countries.map(element => {
        return element.region
    })

    setFiltersRegions([...new Set(allRegions)])
}
// CON ESTA FUNCION MOSTRAREMOS LAS REGIONES EN LOS FILTROS
const setFiltersRegions = arrRegions => {
    arrRegions.forEach(listRegion => [
        inputRegionFilter.innerHTML += 
        `
            <li onclick="filterCountriesByRegion('${listRegion}'), hiddeFilterList()">${listRegion}</li>
        `
    ])
}

// CON ESTA FUNCION MOSTRAREMOS TODOS 
// LOS PAISES OBTENIDOS 
const showAllCountries = () => {
    // VACIAMOS EL CONTENEDOR PARA QUE EL CONTENIDO NO SE DUPLIQUE
    containerContent.innerHTML = ''

    countries.forEach(countrie => {
        containerContent.innerHTML += setAllCountries(
            countrie.area, 
            countrie.flags.png,
            countrie.name,
            countrie.population,
            countrie.region,
            countrie.capital
        )
    })
} 

// CON ESTA FUNCION COLOCAREMOS TODAS LAS CIUDADES
// EN EL CONTENEDOR
const setAllCountries = (area, flag, name, population, region, capital) => {
    const newFlag = flag ? flag : '❌'
    const newName= name ? name: '❌'
    const newPopulation = population ? population : '❌'
    const newRegion = region ? region : '❌'
    const newCapital = capital ? capital : '❌'

    // onclick="searchSelectedCountrie('${area}')"
    return `
    <article class="Container__Content--Countrie" id="${newName}" onclick="searchSelectedCountrie(this.id)">
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

// CON ESTA FUNCION LE DAREMOS FORMATO A LA CANTIDAD
// DE POBLACION
const formatPopulation = population => {
    let newPopulation = String(population).split('')
    for(let i = 3; i < newPopulation.length; i += 4){
        newPopulation.splice(newPopulation.length - i, 0, ',')
    }
    return newPopulation.join('')
}

// CON ESTA FUNCION BUSCAREOS LA CIUDAD
// QUE FUE SELECCIONADA PARA VISUALIZAR
const searchSelectedCountrie = name => {
    body.classList.add('Show')
    const selectedCountrie = countries.filter(element => {
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
    
    selectedCountrieFlag.src = selectedCountrie[0].flags.svg
    selectedCountrieName.innerHTML = selectedCountrie[0].name
    selectedCountrieNativeName.innerHTML = `<b>Native Name:</b> ${newNativeNameInSelected}`
    selectedCountriePopulation.innerHTML = `<b>Population:</b> ${formatPopulation(newPopulationInSelected)}`
    selectedCountrieRegion.innerHTML = `<b>Region:</b> ${newRegionInSelected}`
    selectedCountrieSubRegion.innerHTML = `<b>Sub Region:</b> ${newSubRegionlInSelected}`
    selectedCountrieCapital.innerHTML = `<b>Capital:</b> ${newCapitalInSelected}`
    selectedCountrieDomain.innerHTML = `<b>Top Level Domain:</b> ${newDomainInSelected}`
    selectedCountrieCurrencies.innerHTML = `<b>Currencies:</b> ${newCurrenciesInSelected}`
    selectedCountrieLanguaje.innerHTML = `<b>Languages:</b> ${formatLanguages(newLanguagesInSelected)}`
    formaCountriesBorder(selectedCountrie[0].borders)
}
// CON ESTA FUNCION LE DAREMOS FORMATO A LA CANTIDAD
// DE LENGUAJES
const formatLanguages = countrieLanguage => {
    const newLanguage = countrieLanguage.map(language => {
        return language.name
    })
    return newLanguage.join((', '))
}
// CON ESTA FUNCION LE DAREMOS FORMATO A LA CANTIDAD
// DE BOTONES POR PAISES EN EL BORDE
const formaCountriesBorder = countriesBorders => {
    selectedCountrieBorderButtons.innerHTML = ''
    let currentIndex = 0
    if(countriesBorders){
        countries.forEach(allcountries => {
            if(allcountries.alpha3Code === countriesBorders[currentIndex]){
                currentIndex++
                selectedCountrieBorderButtons.innerHTML += 
                `
                    <button class="Container__Countrie--Details--Border--Button" id="${allcountries.name}" onclick="searchSelectedCountrie(this.id)">
                        ${allcountries.name}
                    </button>
                `
            }
        })
    }else{
        return selectedCountrieBorderButtons.innerHTML = '❌'
    }
}
// CON ESTA FUNCION OCULTAREMOS LA CIUDAD
// QUE FUE SELECCIONADA PARA VISUALIZAR
const hiddeCountrieSelected = () => {
    body.classList.remove('Show')
}



/** 
    FUNCIONES PARA FILTRAR 
    LAS CIUDADES CON LOS 
    INPUTS
**/


// CON ESTA FUNCION FILTRAMOS LOS PAISES POR SU REGION
const filterCountriesByRegion = region => {
    containerContent.innerHTML = ''
    countries.forEach(countrieRegion => {
        if(countrieRegion.region === region){
            containerContent.innerHTML += setAllCountries(
                countrieRegion.area, 
                countrieRegion.flags.png,
                countrieRegion.name,
                countrieRegion.population,
                countrieRegion.region,
                countrieRegion.capital
            )
        }
    })
}


// CON ESTA FUNCION FILTRAMOS LOS PAISES POR SU NOMBRE DE BUSQUEDA
const filterCountriesBySearch = () => {
    const nameCountrie = inputSearchCountrie.value
    if(nameCountrie.length > 0){
        countries.forEach(countrieName => {
            if(countrieName.name.toLowerCase().startsWith(nameCountrie.toLowerCase())){
                inputSearchClear.classList.add('Show')
                containerContent.innerHTML = setAllCountries(
                    countrieName.area, 
                    countrieName.flags.png,
                    countrieName.name,
                    countrieName.population,
                    countrieName.region,
                    countrieName.capital
                )
            }
        })
    }
}

// CON ESTA FUNCION LIMPIAMOS EL INPUT SEARCH Y
// VOLVEMOS A MOSTRAR TODOS LOS PAISES
const clearFilterCountriesBySearch = () => {
    inputSearchCountrie.value = ''
    inputSearchClear.classList.remove('Show')
    setTimeout(() => {
        showAllCountries()
    }, 100);
}
