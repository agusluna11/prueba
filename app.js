/*Variables*/

const btnCierra = document.querySelector('#btn-cierra');
const btnAdelanta = document.querySelector('#btn-adelanta');
const btnRetrocede = document.querySelector('#btn-retrocede');
const imagenes = document.querySelectorAll('#galeria img');
const lightbox = document.querySelector('#contenedor-principal');
const imagenActiva = document.querySelector('#img-activa');
let indiceImagen = 0;

/*Abre el Lightbox*/

const abreLightbox = (event) => {
    imagenActiva.src = event.target.src;
    lightbox.style.display = 'flex';
    indiceImagen = Array.from(imagenes).indexOf(event.target);
  };
  
  imagenes.forEach((imagen) => {
    imagen.addEventListener('click', abreLightbox);
  });


/*Cierra el Lightbox */

btnCierra.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });


/* btnMostrar.onclick = abreLightbox; */
/* btnCierra.onclick = cerrarLightbox;  */