/** 
    CONSTANTES PARA
    EL CONTENIDO DE LOS
    INPUTS
**/

// OBTENEMOS EL ROOT 
const root = document.querySelector(':root')
// OBTENEMOS EL BOTON QUE ADMINISTRAR EL DARK MODE
const buttonDarkMode = document.querySelector('.Container__Header--DarkMode')

/** 
    FUNCIONES PARA
    EL ROOT
**/

// CON ESTA FUNCION COLOCAMOS EL DARK MODE
const setDarkMode = () => {
    
    // ALMACENAMOS DE FORMA LOCAL NUESTRA VARIABLE DARK MODE
    localStorage.setItem('Countries__Dark__Mode', 'Dark')
    checkDarkMode()

}
// CON ESTA FUNCION ELIMINAMOS EL DARK MODE
const deleteDarkMode = () => {
    
    // ELIMINAMOS DE FORMA LOCAL NUESTRA VARIABLE DARK MODE
    localStorage.removeItem('Countries__Dark__Mode')
    checkDarkMode()

}

// CON ESTA FUNCION CHECAMOS SI TENEMOS ALMACENADO EL DARK MODE
// DE FORMA LOCAL
const checkDarkMode = () => {
    if(localStorage.getItem('Countries__Dark__Mode')){
        root.classList.add('Dark')
        buttonDarkMode.setAttribute('onclick', 'deleteDarkMode()')
    }else{
        root.classList.remove('Dark')
        buttonDarkMode.setAttribute('onclick', 'setDarkMode()')
    }
}