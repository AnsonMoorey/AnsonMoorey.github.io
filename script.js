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
    const map = L.map(mapDiv).setView([68, -91.935165], 2);

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
	const lineWeight = mapDiv.getAttribute("data-weight") || 4;
    new L.GPX(gpxFile, {
      async: true,
      polyline_options: {
        color: "#FC4C02",
        weight: lineWeight,
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

	// Update metrics safely
	if (metricsDiv) {
	  const distanceEl = metricsDiv.querySelector(".distance");
	  if (distanceEl) {
		distanceEl.textContent = (gpx.get_distance() / 1000).toFixed(2) + " km";
	  }

	  const timeEl = metricsDiv.querySelector(".time");
	  if (timeEl) {
		const totalTime = gpx.get_total_time();
		timeEl.textContent = gpx.get_duration_string_iso(totalTime);
	  }

	  const elevationEl = metricsDiv.querySelector(".elevation");
	  if (elevationEl) {
		elevationEl.textContent = gpx.get_elevation_gain().toFixed(0) + " m";
	  }
	}

    }).addTo(map);
  });