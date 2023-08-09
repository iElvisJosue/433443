// CON ESTA FUNCION OBTENEMOS TODOS LOS PAISES DE LA API LOCAL
export async function getCountriesFromApi() {
    const response = await fetch('https://raw.githubusercontent.com/iElvisJosue/Frontend_Mentor_Challenges/main/rest-countries-api-with-color-theme-switcher-main/api/data.json')
    // const response = await fetch('../api/data.json')
    const countries = await response.json()
    
    return countries
}
