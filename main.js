var imagenes=new Array("img/foto1.jpg","img/foto2.jpg","img/foto3.jpg","img/foto4.jpg");//arreglo con las url de las imagenes
var posicion=0;//esta va ser el contador
var img=document.querySelector(".img");//selecciona el elemento de unam clase(si es clase con .img /si es id #img)
img.style.backgroundImage ='url('+ imagenes[posicion]+')';//ponemos la imagen 

function isquierda() {
    if (posicion==0) {
        posicion=3;
    }else{
        posicion--;
    }
    img.style.backgroundImage ='url('+ imagenes[posicion]+')';
}

function derecha() {
    if (posicion==3) {
        posicion=0;
    }else{
        posicion++;
    }
    img.style.backgroundImage ='url('+ imagenes[posicion]+')';
}