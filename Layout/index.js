  
const Home = document.querySelector("#home");
const Spotify = document.querySelector("#spotify");
const Whatsaap = document.querySelector("#Whatsaap");

Home.addEventListener("click", CargarPaginaHome);
Spotify.addEventListener("click", CargarPaginaSpotify);
Whatsaap.addEventListener("click", CargarPaginaWhatsaap);

const contDinamico = document.querySelector(".contenido-dinamico");
const tituloPagina = document.querySelector('#titulo-pagina');

function CargarPaginaHome() {
    
    contDinamico.setAttribute('src', '../Home/index.html');
    tituloPagina.innerHTML = 'Home';
}
function CargarPaginaSpotify() {
    
    contDinamico.setAttribute('src', '../Spotifyy/index.html');
    tituloPagina.innerHTML = 'Spotifyy';
}
function CargarPaginaWhatsaap() {
    
    contDinamico.setAttribute('src', '../Whatsaap/index.html');
    tituloPagina.innerHTML = 'Whatsaap';
}
