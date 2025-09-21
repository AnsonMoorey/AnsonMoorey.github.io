document.addEventListener("DOMContentLoaded", () => {
  const layers = [
    { el: document.querySelector(".layer1"), speed: 1, offset: 0 },
    { el: document.querySelector(".layer2"), speed: 1, offset: -85 },
    { el: document.querySelector(".layer3"), speed: 1, offset: -170 },
    { el: document.querySelector(".layer4"), speed: 1, offset: -255 },
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

  const mapContainers = document.querySelectorAll(".map-container");

  mapContainers.forEach((container, index) => {
    const mapDiv = container.querySelector(".map");
    const metricsDiv = container.querySelector(".map-metrics");

    // Initialize map
    const map = L.map(mapDiv).setView([32.7462, -16.9910], 10);

    // Tile layer
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 18,
      attribution: 'Tiles © Esri'
    }).addTo(map);

    // GPX icons
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

    // Load GPX file from data-gpx attribute
    const gpxFile = mapDiv.getAttribute("data-gpx");
    new L.GPX(gpxFile, {
      async: true,
      polyline_options: {
        color: "#FC4C02",
        weight: 4,
        opacity: 1,
        lineCap: "round"
      },
      markers: {
        startIcon: startIcon,
        endIcon: endIcon,
        shadowUrl: null
      },
      display_wpt: false
    }).on("loaded", function(e) {
      const gpx = e.target;
      map.fitBounds(gpx.getBounds());

      // Update metrics
      if (metricsDiv) {
        metricsDiv.querySelector(".distance").textContent = (gpx.get_distance()/1000).toFixed(2) + " km";
        metricsDiv.querySelector(".time").textContent = gpx.get_duration_string_iso(gpx.get_total_time());
        metricsDiv.querySelector(".elevation").textContent = gpx.get_elevation_gain().toFixed(0) + " m";
      }
    }).addTo(map);
  });