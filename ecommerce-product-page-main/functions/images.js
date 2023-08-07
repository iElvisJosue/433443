<<<<<<< HEAD
/** 
    CONSTANTES 
    PARA EL CONTENIDO 
    LAS IMAGENES
**/

// OBTENEMOS EL CONTENEDOR DEL COVER
const containerCover = document.querySelector('.Cover')
// OBTENEMOS EL CONTENEDOR DE LA IMAGEN PRINCIPAL
const containerMainImage = document.querySelector('.Product-Image')
// OBTENEMOS EL CONTENEDOR DE LA IMAGEN PRINCIPAL DEL COVER
const containerMainImageCover = document.querySelector('.Image--Cover')
// OBTENEMOS TODAS LAS IMAGENES EN MINIATURA DEL COTENIDO PRINCIPAL
const imagePreviewProduct = document.querySelectorAll('.Images-Preview-Product')
// OBTENEMOS TODAS LAS IMAGENES EN MINIATURA DEL COTENIDO DEL COVER
const imagePreviewProductCover = document.querySelectorAll('.Cover__Content--Preview--Picture')

/** 
    VARIABLES 
    PARA EL CONTENIDO 
    DE LAS IMAGENES
**/

let currentImage = 0
let currentImageCover = 0

const imagesProduct = [
    './images/image-product-1.jpg',
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg'
]

/** 
    FUNCIONES PARA
    LOS BOTONES RELACIONADOS
    CON LAS IMAGENES
**/

// CON ESTA FUNCION MOSTRAMOS EL COVER DE LAS IMAGENES
const showCover = () => {
    showCurrentImageCover()
    setClassPreviewImageCover()
    containerCover.classList.add('Show')
}
// CON ESTA FUNCION OCULTAMOS EL COVER DE LAS IMAGENES
const hiddeCover = () => {
    containerCover.classList.remove('Show')
}
// CON ESTA FUNCION COLOCAMOS LA IMAGEN PEQUEÑA EN LA GRANDE
const changeMainImage = img => {
    currentImage = img
    containerMainImage.src = imagesProduct[currentImage]
    setClassPreviewImage()
}
// CON ESTA FUNCION COLOCAMOS LA IMAGEN PEQUEÑA EN LA GRANDE DEL COVER
const changeMainImageCover = imgCover => {
    currentImageCover = imgCover
    containerMainImageCover.src = imagesProduct[currentImageCover]
    setClassPreviewImageCover()
}
// CON ESTA FUNCION COLOCAMOS LA IMAGEN ACTUAL EN EL COVER
const showCurrentImageCover = () => {
    currentImageCover = currentImage
    containerMainImageCover.src = imagesProduct[currentImage]
}
// CON ESTA FUNCION MOSTRAMOS LA SIGUIENTE IMAGEN EN EL COVER
const nextImageCover = () => {
    currentImageCover < 3 ? currentImageCover++ : currentImageCover = 0
    containerMainImageCover.src = imagesProduct[currentImageCover]
    setClassPreviewImageCover()
}
// CON ESTA FUNCION MOSTRAMOS LA ANTERIOR IMAGEN EN EL COVER
const previousImageCover = () => {
    currentImageCover > 0 ? currentImageCover-- : currentImageCover = 3
    containerMainImageCover.src = imagesProduct[currentImageCover]
    setClassPreviewImageCover()
}
// CON ESTA FUNCION AGREGAMOS LA CLASE A AL PREVIEW DEL
// PRODUCTO EN EL MAIN
const setClassPreviewImage = () => {
    imagePreviewProduct.forEach((e, index) => {
        index === currentImage ? e.classList.add('Active') : e.classList.remove('Active')
    })
}
// CON ESTA FUNCION AGREGAMOS LA CLASE A AL PREVIEW DEL
// PRODUCTO EN EL COVER
const setClassPreviewImageCover = () => {
    imagePreviewProductCover.forEach((e, index) => {
        index === currentImageCover ? e.classList.add('Active') : e.classList.remove('Active')
    })
}
// CON ESTA FUNCION MOSTRAMOS LA ANTERIOR IMAGEN EN EL MAIN
const previousImageMain = () => {
    currentImage > 0 ? currentImage-- : currentImage = 3
    containerMainImage.src = imagesProduct[currentImage]
}
// CON ESTA FUNCION MOSTRAMOS LA SIGUIENTE IMAGEN EN EL main
const nextImageMain = () => {
    currentImage < 3 ? currentImage++ : currentImage = 0
    containerMainImage.src = imagesProduct[currentImage]
}
=======
/** 
    CONSTANTES 
    PARA EL CONTENIDO 
    LAS IMAGENES
**/

// OBTENEMOS EL CONTENEDOR DEL COVER
const containerCover = document.querySelector('.Cover')
// OBTENEMOS EL CONTENEDOR DE LA IMAGEN PRINCIPAL
const containerMainImage = document.querySelector('.Product-Image')
// OBTENEMOS EL CONTENEDOR DE LA IMAGEN PRINCIPAL DEL COVER
const containerMainImageCover = document.querySelector('.Image--Cover')
// OBTENEMOS TODAS LAS IMAGENES EN MINIATURA DEL COTENIDO PRINCIPAL
const imagePreviewProduct = document.querySelectorAll('.Images-Preview-Product')
// OBTENEMOS TODAS LAS IMAGENES EN MINIATURA DEL COTENIDO DEL COVER
const imagePreviewProductCover = document.querySelectorAll('.Cover__Content--Preview--Picture')

/** 
    VARIABLES 
    PARA EL CONTENIDO 
    DE LAS IMAGENES
**/

let currentImage = 0
let currentImageCover = 0

const imagesProduct = [
    '../images/image-product-1.jpg',
    '../images/image-product-2.jpg',
    '../images/image-product-3.jpg',
    '../images/image-product-4.jpg'
]

/** 
    FUNCIONES PARA
    LOS BOTONES RELACIONADOS
    CON LAS IMAGENES
**/

// CON ESTA FUNCION MOSTRAMOS EL COVER DE LAS IMAGENES
const showCover = () => {
    showCurrentImageCover()
    setClassPreviewImageCover()
    containerCover.classList.add('Show')
}
// CON ESTA FUNCION OCULTAMOS EL COVER DE LAS IMAGENES
const hiddeCover = () => {
    containerCover.classList.remove('Show')
}
// CON ESTA FUNCION COLOCAMOS LA IMAGEN PEQUEÑA EN LA GRANDE
const changeMainImage = img => {
    currentImage = img
    containerMainImage.src = imagesProduct[currentImage]
    setClassPreviewImage()
}
// CON ESTA FUNCION COLOCAMOS LA IMAGEN PEQUEÑA EN LA GRANDE DEL COVER
const changeMainImageCover = imgCover => {
    currentImageCover = imgCover
    containerMainImageCover.src = imagesProduct[currentImageCover]
    setClassPreviewImageCover()
}
// CON ESTA FUNCION COLOCAMOS LA IMAGEN ACTUAL EN EL COVER
const showCurrentImageCover = () => {
    currentImageCover = currentImage
    containerMainImageCover.src = imagesProduct[currentImage]
}
// CON ESTA FUNCION MOSTRAMOS LA SIGUIENTE IMAGEN EN EL COVER
const nextImageCover = () => {
    currentImageCover < 3 ? currentImageCover++ : currentImageCover = 0
    containerMainImageCover.src = imagesProduct[currentImageCover]
    setClassPreviewImageCover()
}
// CON ESTA FUNCION MOSTRAMOS LA ANTERIOR IMAGEN EN EL COVER
const previousImageCover = () => {
    currentImageCover > 0 ? currentImageCover-- : currentImageCover = 3
    containerMainImageCover.src = imagesProduct[currentImageCover]
    setClassPreviewImageCover()
}
// CON ESTA FUNCION AGREGAMOS LA CLASE A AL PREVIEW DEL
// PRODUCTO EN EL MAIN
const setClassPreviewImage = () => {
    imagePreviewProduct.forEach((e, index) => {
        index === currentImage ? e.classList.add('Active') : e.classList.remove('Active')
    })
}
// CON ESTA FUNCION AGREGAMOS LA CLASE A AL PREVIEW DEL
// PRODUCTO EN EL COVER
const setClassPreviewImageCover = () => {
    imagePreviewProductCover.forEach((e, index) => {
        index === currentImageCover ? e.classList.add('Active') : e.classList.remove('Active')
    })
}
// CON ESTA FUNCION MOSTRAMOS LA ANTERIOR IMAGEN EN EL MAIN
const previousImageMain = () => {
    currentImage > 0 ? currentImage-- : currentImage = 3
    containerMainImage.src = imagesProduct[currentImage]
}
// CON ESTA FUNCION MOSTRAMOS LA SIGUIENTE IMAGEN EN EL main
const nextImageMain = () => {
    currentImage < 3 ? currentImage++ : currentImage = 0
    containerMainImage.src = imagesProduct[currentImage]
}
>>>>>>> 44ebaf7 (Chalenge completed!)
