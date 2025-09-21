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
const map = L.map('map').setView([32.74620487745896, -16.99095898886067], 10); // starting coords

// Add tile layer (OpenStreetMap)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 18,
  attribution: 'Tiles © Esri'
}).addTo(map);

//Icons
const startIcon = L.icon({
  iconUrl: "Assets/start.png",
  iconSize: [32, 32],   // adjust to your PNG size
  iconAnchor: [16, 16]  // bottom-center of icon sits on point
});

const endIcon = L.icon({
  iconUrl: "Assets/end.png",
  iconSize: [32, 32],
  iconAnchor: [16, 16]
});

// Load GPX file
new L.GPX("Assets/Madeira.gpx", {
  async: true,
    polyline_options: {
    color: "#FC4C02",     // line color
    weight: 4,        // line thickness
    opacity: 1,     // transparency
    lineCap: "round",  // style of line ends
  },
  marker_options: {
	startIcon: null,
	endIcon: null,
	shadowUrl: "",
  }
  
.on("loaded", function(e) {
  const gpx = e.target;          // the L.GPX object
  map.fitBounds(gpx.getBounds()); // zoom map to track bounds

  // Access all segments' coordinates safely:
  gpx.getLayers().forEach(layer => {
    if (layer instanceof L.Polyline) {
      const coords = layer.getLatLngs();
      console.log(coords); // array of LatLng objects
    }
  });
})
}).addTo(map);
