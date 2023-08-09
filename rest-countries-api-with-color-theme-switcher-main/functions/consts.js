/** 
    IMPORTAMOS EL CONTENIDO NECESARIO
**/
import { getCountriesFromApi } from "./getapi.js"

/** 
    CONSTANTES PARA
    EL CONTENIDO DE LAS
    CIUDADES
**/

// EN ESTA VARIABLE ALMACENAMOS LOS PAISES
// OBTENIDOS DESDE LA API

export const countriesFromApi = await getCountriesFromApi()
/** 
    CONSTANTES PARA
    EL CONTENIDO DE LAS
    CIUDADES
**/

// OBTENEMOS EL BODY
export const body = document.body
// OBTENEMOS EL CONTENEDOR DONDE SE MOSTRARAN LOS PAISES
export const containerContent = document.querySelector('.Container__Content')
// OBTENEMOS EL CONTENEDOR DONDE SE MOSTRARA LA INFORMACION
// DETALLADA DEL PAIS
export const containerCountrie = document.querySelector('.Container__Countrie')


/** 
    CONSTANTES PARA
    EL CONTENIDO DE LA
    CIUDAD SELECCIONADA
**/
// OBTENEMOS EL CONTENEDOR DE LA BANDERA DE LA CIUDAD SELECCIONADA
export const selectedCountrieFlag = document.querySelector('.Container__Countrie--Details--Image-Flag')
// OBTENEMOS EL CONTENEDOR DEL NOMBRE DE LA CIUDAD SELECCIONADA
export const selectedCountrieName = document.querySelector('.Container__Countrie--Details--Text--Name')
// OBTENEMOS EL CONTENEDOR DEL NOMBRE NATIVO DE LA CIUDAD SELECCIONADA
export const selectedCountrieNativeName = document.querySelector('.Container__Countrie--Details--Data--Left--Native')
// OBTENEMOS EL CONTENEDOR DE LA POBLACION DE LA CIUDAD SELECCIONADA
export const selectedCountriePopulation = document.querySelector('.Container__Countrie--Details--Data--Left--Population')
// OBTENEMOS EL CONTENEDOR DE LA REGION DE LA CIUDAD SELECCIONADA
export const selectedCountrieRegion = document.querySelector('.Container__Countrie--Details--Data--Left--Region')
// OBTENEMOS EL CONTENEDOR DE LA SUBREGION DE LA CIUDAD SELECCIONADA
export const selectedCountrieSubRegion = document.querySelector('.Container__Countrie--Details--Data--Left--SubRegion')
// OBTENEMOS EL CONTENEDOR DE LA CAPITAL DE LA CIUDAD SELECCIONADA
export const selectedCountrieCapital = document.querySelector('.Container__Countrie--Details--Data--Left--Capital')
// OBTENEMOS EL CONTENEDOR DEL DOMINIO DE LA CIUDAD SELECCIONADA
export const selectedCountrieDomain = document.querySelector('.Container__Countrie--Details--Data--Right--Domain')
// OBTENEMOS EL CONTENEDOR DE LA MONEDA DE LA CIUDAD SELECCIONADA
export const selectedCountrieCurrencies = document.querySelector('.Container__Countrie--Details--Data--Right--Currencies')
// OBTENEMOS EL CONTENEDOR DE LOS IDIOMAS DE LA CIUDAD SELECCIONADA
export const selectedCountrieLanguaje = document.querySelector('.Container__Countrie--Details--Data--Right--Languajes')
// OBTENEMOS EL CONTENEDOR DE LOS BOTONES DE LA CIUDAD SELECCIONADA
export const selectedCountrieBorderButtons = document.querySelector('.Container__Countrie--Details--Border--Buttons')
// OBTENEMOS EL INPUT SEACH
export const inputSearchCountrie = document.querySelector('.Container__Inputs--Search--Text')
// OBTENEMOS EL ICONO DE CERRAR LIMPIAR BUSQUEDA
export const inputSearchClear = document.querySelector('.Container__Inputs--Search--Clear')
// OBTENEMOS EL INPUT CON LOS FILTROS POR REGION
export const inputRegionFilter = document.querySelector('.Container__Inputs--Filter--Region')
