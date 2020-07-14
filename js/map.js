var lat = -5.195095;
var lon = -80.625955;
var mymap = L.map('map-company').setView([lat, lon], 19);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiandoYWNoZW5nIiwiYSI6ImNqdXlpa245ZTB5YjA0ZHF4aHVsdjk0N2oifQ.iNFit47gf4_ckKpOlHKpAQ', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
var marker = L.marker([lat, lon]).addTo(mymap);
marker.bindPopup("Jr. Callao 318, Oficina 201, Piura - Perú").openPopup();