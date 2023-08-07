/** 
    CONSTANTES 
    PARA EL CONTENIDO 
    DEL CARRITO
**/

// OBTENEMOS EL CONTENEDOR DEL CARRITO
const containerCart = document.querySelector('.Container__Cart')
// OBTENEMOS EL CONTENEDOR DE LA CANTIDAD DE PRODUCTOS EN EL CARRITO
const amountProductCart = document.querySelector('.Options--Cart--Amount')
// OBTENEMOS EL CONTENIDO DE LOS DETALLES DEL PRODUCTO EN EL CARRITO
const contentCart =  document.querySelector('.Container__Cart--Content')
// OBTENEMOS EL CONTENIDO DEL CARRITO CUANDO ESTA VACIO
const contentCartEmpty = document.querySelector('.Container__Cart--Content--Empty')
// OBTENEMOS EL CONTENIDO DEL CARRITO CUANDO NO ESTA VACIO
const contentCartProduct = document.querySelector('.Container__Cart--Content--Product')
// OBTENEMOS EL CONTENIDO DEL TOTAL DEL CARRITO
const contentCartTotal = document.querySelector('.Product--Details--Price')
// OBTENEMOS EL BOTON DEL CARRITO CUANDO NO ESTA VACIO
const contentCartButton = document.querySelector('.Container__Cart--Content--Button')
// OBTENEMOS EL CONTENIDO DE LA CANTIDAD DE PRODUCTOS A AGREGAR
const contentTotalProducts = document.querySelector('.Details--Buttons--Text')
// OBTENEMOS EL MODAL DE AGREGAR AL MENOS UN PRODUCTO
const contentModal = document.querySelector('.Container__Modal')

/** 
    VARIABLES 
    PARA EL CONTENIDO 
    DEL CARRITO
**/

let totalProducts = 0

/** 
    FUNCIONES PARA
    LOS BOTONES RELACIONADOS
    CON EL CARRITO
**/
// CON ESTA FUNCION MOSTRAMOS EL CARRITO
const showCart = () => {
    containerCart.classList.toggle('Show')
}
// CON ESTA FUNCION MOSTRAMOS LA CANTIDAD DE PRODUCTOS A AGREGAR EN EL CARRITO
const showTotalProducts = () => {
    return contentTotalProducts.innerHTML = totalProducts
}
// CON ESTA FUNCION RESTAMOS PRODUCTOS A AGREGAR EN EL CARRITO
const subtractProducts = () => {
    totalProducts > 0 ? totalProducts-- : false 
    showTotalProducts()
}
// CON ESTA FUNCION SUMAMOS PRODUCTOS A AGREGAR EN EL CARRITO
const addProducts = () => {
    totalProducts++ 
    showTotalProducts()
}
// CON ESTA FUNCION VERIFICAMOS SI AGREGARON AL MENOS UN PRODUCTO
const checkProductsToCart = () => {
    totalProducts > 0 ? addProductsToCart() : productsEmpty()
}
// CON ESTA FUNCION MOSTRAMOS EL MENSAJE DE QUE NO AGREGARON PRODUCTOS
const productsEmpty = () => {
    contentModal.classList.add('Show')
    setTimeout(() => {
        contentModal.classList.remove('Show')
    }, 3000);
}
// CON ESTA FUNCION AGREGAMOS LOS PRODUCTOS AL CARRITO
const addProductsToCart = () => {
    setTotalCart()
    showContentCart()
    showPreviewAmountProductsCart() 
}
// CON ESTA FUNCION ELIMINAMOS LOS PRODUCTOS DEL CARRITO
const deleteProductsToCart = () => {
    hiddePreviewAmountProductsCart()
    contentCartEmpty.classList.remove('Hidde')
    contentCartProduct.classList.remove('Show')
    contentCartButton.classList.remove('Show')
}
// CON ESTA FUNCION CALCULAMOS Y COLOCAMOS EL TOTAL DEL CARRITO
const setTotalCart = () => {
    contentCartTotal.innerHTML = 
    `
        $125.00 x ${totalProducts} <b class="Details--Price--Total">$${125 * totalProducts}.00</b>
    `
}
// CON ESTA FUNCION MOSTRAMOS EL CONTENIDO DEL CARRITO NO VACIO
const showContentCart = () => {
    containerCart.classList.add('Show')
    contentCartEmpty.classList.add('Hidde')
    contentCartProduct.classList.add('Show')
    contentCartButton.classList.add('Show')
}
// CON ESTA FUNCIONA COLOCAREMOS Y MOSTRAREMOS AL LADO DEL ICONO DEL CARRITO 
// LA CANTIDAD DE PRODUCTOS EN EL CARRITO
const showPreviewAmountProductsCart = () => {
    amountProductCart.classList.add('Show')
    amountProductCart.innerHTML = totalProducts
}
// CON ESTA FUNCION OCULTAREMOS AL LADO DEL ICONO DEL CARRITO 
// LA CANTIDAD DE PRODUCTOS EN EL CARRITO
const hiddePreviewAmountProductsCart = () => {
    amountProductCart.classList.remove('Show')
}
/** 
    CONSTANTES 
    PARA EL CONTENIDO 
    DEL CARRITO
**/
