window.onload = function () {
    // Variables
    let img1='https://n9.cl/fm0t9'
    let img2='https://n9.cl/56u6y'
    let img3='https://images.unsplash.com/photo-1581265463006-f019c3419709?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60 '
    let img4='https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'

    const img = [img1, img2, img3, img4]
    
    // const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
    let posicionActual = 0;
    let botonRetroceder = document.querySelector('#retroceder');
    let botonAvanzar = document.querySelector('#avanzar');
    let imagen = document.querySelector('#imagen');
    let botonPlay = document.querySelector('#play');
    let botonStop = document.querySelector('#stop');
    let botonAutoRetroceder= document.querySelector('#autoback')
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= img.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = img.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        imagen.style.backgroundImage = `url(${img[posicionActual]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto,1000);
        // Desactivamos los botones de control
        botonAvanzar.setAttribute('disabled', true);
        botonRetroceder.setAttribute('disabled', true);
        botonPlay.setAttribute('disabled', true);
        botonAutoRetroceder.setAttribute('disabled',true)
        botonStop.removeAttribute('disabled');

    }
     /**
     * Para el autoback de la imagen
     */
    
   function retrocederIntervalo() {
       intervalo = setInterval(retrocederFoto,1000);
       // Desactivamos los botones de control
       botonAvanzar.setAttribute('disabled', true);
       botonRetroceder.setAttribute('disabled', true);
       botonPlay.setAttribute('disabled', true);
       botonAutoRetroceder.setAttribute('disabled',true)
       botonStop.removeAttribute('disabled');

   }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        botonAvanzar.removeAttribute('disabled');
        botonRetroceder.removeAttribute('disabled');
        botonPlay.removeAttribute('disabled');
        botonAutoRetroceder.setAttribute('disabled')
        botonStop.setAttribute('disabled', true);
    }

    // Eventos
    botonAvanzar.addEventListener('click', pasarFoto);
    botonRetroceder.addEventListener('click', retrocederFoto);
    botonPlay.addEventListener('click', playIntervalo);
    botonStop.addEventListener('click', stopIntervalo);
    botonAutoRetroceder.addEventListener('click',retrocederIntervalo);
    // Iniciar
    renderizarImagen();
} 
