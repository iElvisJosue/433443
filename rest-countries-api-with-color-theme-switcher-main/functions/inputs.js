/** 
    CONSTANTES PARA
    EL CONTENIDO DE LOS
    INPUTS
**/

// OBTENEMOS LA LISTA CON LAS REGIONES
const regionFilterList = document.querySelector('.Container__Inputs--Filter--Region')
// OBTENEMOS TODOS LOS ELEMENTOS DE LA LISTA DE REGIONS
const regionFilterListLi = document.querySelectorAll('.Container__Inputs--Filter--Region li')

/** 
    FUNCIONES PARA
    LOS INPUTS
**/

const showFilterList = () => {
    regionFilterList.classList.toggle('Show')
}

const hiddeFilterList = () => {
    regionFilterList.classList.toggle('Show')
}