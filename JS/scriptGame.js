
const navChange=()=>{
    if(window.innerHeight*0.35 < window.scrollY  ){
        document.querySelector("nav").classList.add("fondoNav")
        
    }else{
    document.querySelector("nav").classList.remove("fondoNav") 
    }
} 
function iniciar(){
    let imagenes=document.querySelectorAll('#cajaimagenes img');
    for(var i=0; i<imagenes.length; i++){
        imagenes[i].addEventListener('dragstart', arrastrado, false);
    }

    let soltar = document.querySelectorAll('.caja')
    for(var i=0; i<soltar.length ; i++){
        soltar[i].addEventListener('dragover', function(e){e.preventDefault();}, false)
    }
    for(var i=0; i<soltar.length ; i++){
        soltar[i].addEventListener('drop', soltado, false)
    }
}

function arrastrado(e){
    let elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
    console.log(elemento);
}

async function soltado(e){
    let idImagen=e.dataTransfer.getData('Text');
    let imagen=document.getElementById(idImagen);

    if (e.target.tagName !== 'IMG' ){
        e.target.innerHTML='<img src="'+imagen.src+'" height="400px" width="275px">';
        imagen.style.display= 'none'; 
    }

}

let botReinicio = document.getElementById('reiniciar');
botReinicio.addEventListener('click', ()=>{window.location.reload();});

iniciar();