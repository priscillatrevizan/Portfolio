// Initialize and add the map
let map;

async function initMap() {
  // The location of União da Vitória
  const position = { lat: -26.22186851501465, lng: -51.086273193359375 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at União da Vitória
  map = new Map(document.getElementById("map"), {
    zoom: 12,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at União da Vitória
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "União da Vitória",
  });
}

initMap();

// The marker, positioned at União da Vitória
const marker = new AdvancedMarkerElement({
  map: map,
  position: position,
  title: "União da Vitória",
});
