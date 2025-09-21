document.addEventListener("DOMContentLoaded", () => {
  const layers = [
    { el: document.querySelector(".layer1"), speed: 1, offset: 0 },
    { el: document.querySelector(".layer2"), speed: 1, offset: -85 },
    { el: document.querySelector(".layer3"), speed: 1, offset: -200 },
    { el: document.querySelector(".layer4"), speed: 1, offset: -300 },
  ];

  // Function to position layers
  function updateLayers() {
    const scrollY = window.scrollY;
	const vh = window.innerHeight; // 1vh = viewport height in px
    layers.forEach(layer => {
		const offsetPx = layer.offset * vh / 100; // convert vh to px
		layer.el.style.transform = `translateY(${scrollY * layer.speed + offsetPx}px)`;
    });
  }

  // Initialize immediately
  updateLayers();

  // Update on scroll
  window.addEventListener("scroll", updateLayers);
});

// MAP STUFF

// Initialize map
const map = L.map('map').setView([32.74620487745896, -16.99095898886067], 13); // starting coords

// Add tile layer (OpenStreetMap)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 18,
  attribution: 'Tiles © Esri'
}).addTo(map);

// Load GPX file
new L.GPX("Assets/Madeira.gpx", {
  async: true,
  marker_options: {
	startIconUrl: "https://unpkg.com/leaflet-gpx/pin-icon-start.png",
	endIconUrl: "https://unpkg.com/leaflet-gpx/pin-icon-end.png",
	shadowUrl: "https://unpkg.com/leaflet-gpx/pin-shadow.png"
  }
}).on("loaded", function(e) {
  map.fitBounds(e.target.getBounds()); // zoom to track
}).addTo(map);
