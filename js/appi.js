//ejecutar función en el evento click//
document.getElementById("btn_open").addEventListener("click", open_close_menu);

//descripción de variables//
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//evento para mostrar y ocultar el menu

function open_close_menu(){
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu__side_move");
}

//si el ancho de la pagina es menor a 760px, ocultara el menu al recargar la pagina

if (windows.innerwidth < 760){
    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

//haciendo el menu adaptable

windows.addEventListener("resize", function(){
    if (windows.innerwidth > 760){
        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (windows.innerwidth < 760){
        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }

});