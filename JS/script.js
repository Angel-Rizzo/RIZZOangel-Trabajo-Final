/* Efecto barra de navegacion */

let barraNavegacion =document.getElementsByTagName('nav');
let ventana = document;

barraNavegacion[0]=addEventListener('scroll',()=>{
    
    if(window.scrollY>innerHeight*0.4){
        
        barraNavegacion[0].classList.add('fondoNav');
    } else {
        barraNavegacion[0].classList.remove('fondoNav');
    }
})


