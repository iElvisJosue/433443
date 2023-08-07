// CON ESTA OCULTAREMOS TODO EL CONTENIDO DEL CURRENT STEP
export const clearContentStep = (numberOfStep) => {
    // OBTENEMOS EL HEADER Y LO OCULTAMOS
    const headerStep = document.querySelector('.Container__Card-Forms-Header')
    headerStep.style.display = 'none'
    // OBTENEMOS TODOS LOS FORMULARIOS DEL COTENIDO PRICIPAL
    const contentStep = document.querySelector('.Container__Card-Forms-Summary')      
    // OCULTAMOS EL CONTENIDO DEL CURRENT STEP
    contentStep.classList.remove('Show')
    // OBTENEMOS EL FOOTER Y LO OCULTAMOS  
    const footerStep = document.querySelector('.Container__Card-Forms-Footer')
    footerStep.style.display = 'none'
    // OBTENEMOS EL CONTENEDOR PRINCIPAL Y LE ASIGNAMOS UNA CLASE
    const mainContentStep = document.querySelector('.Container__Card-Forms ')
    mainContentStep.classList.add('Center')

    showThanYouModal()
}
// CON ESTA FUNCION MOSTRAMOS EL MODAL DE GRACIAS
export const showThanYouModal = () => {
    // OBTENEMOS EL MODAL DE THAN YOU Y LO MOSTRAMOS
    const modalThankYou = document.querySelector('.Container__Card-Forms-Modal')
    modalThankYou.classList.add('Show')
}