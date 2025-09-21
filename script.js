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

  // Map setup for multiple maps
  const mapDivs = document.querySelectorAll(".map");

  mapDivs.forEach(div => {
    const gpxFile = div.dataset.gpx;

    const map = L.map(div.id).setView([32.7462, -16.9910], 10); // default coords

    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      { maxZoom: 18, attribution: 'Tiles © Esri' }
    ).addTo(map);

    const startIcon = L.icon({
      iconUrl: "Assets/start.png",
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });
    const endIcon = L.icon({
      iconUrl: "Assets/end.png",
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });

    new L.GPX(gpxFile, {
      async: true,
      polyline_options: {
        color: "#FC4C02",
        weight: 4,
        opacity: 1,
        lineCap: "round",
      },
      markers: {
        startIcon: startIcon,
        endIcon: endIcon,
        shadowUrl: null
      },
      display_wpt: false
    })
    .on("loaded", e => map.fitBounds(e.target.getBounds()))
    .addTo(map);
  });