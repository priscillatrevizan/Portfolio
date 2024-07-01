// Definindo a altura do contêiner do mapa via CSS
document.getElementById("map").style.height = "200px";

// Inicializando o mapa em União da Vitória com zoom 13
var map = L.map("map").setView([-26.2304, -51.0866], 13);

// Usando o estilo escuro do CartoDB
L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://carto.com/attributions">CARTO</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Adicionando um marcador com popup
var marker = L.marker([-26.2304, -51.0866])
  .addTo(map)
  .bindPopup("<b>Bem vindo a </b> </br> União da Vitória")
  .openPopup();

// Lidando com eventos de clique no mapa
var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("Você clicou no mapa em " + e.latlng.toString())
    .openOn(map);
}

map.on("click", onMapClick);
