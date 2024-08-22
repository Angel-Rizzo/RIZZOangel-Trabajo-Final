
const navChange=()=>{
    
  
    if(window.innerHeight*0.35 < window.scrollY  ){
        document.querySelector("nav").classList.add("fondoNav")
        
    }else{
    document.querySelector("nav").classList.remove("fondoNav")
        
       
    }
} 
function iniciar(){
    let imagenes=document.querySelectorAll('#cajaimagenes img');
    
    let soltar0 = document.getElementById('cajasoltar');  
    let soltar1 = document.getElementById('cajasoltar2'); 
    let soltar2 = document.getElementById('cajasoltar3'); 



    for(var i=0; i<imagenes.length; i++){
        imagenes[i].addEventListener('dragstart', arrastrado, false);
    }


    
    soltar0.addEventListener('dragover', function(e){
        e.preventDefault(); }, false);
    soltar0.addEventListener('drop', soltado, false);


    
    soltar1.addEventListener('dragover', function(e){
        e.preventDefault(); }, false);
    soltar1.addEventListener('drop', soltado, false);


    
    soltar2.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar2.addEventListener('drop', soltado, false);

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
function reinicio() {
    window.location.reload();
}
iniciar();