$(document).ready(init);




function init() {
    var mymap = L.map('map').setView([24.4539, 54.3773], 11);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 20,
        minZoom: 10,
        attribution: 'Leaflet',
        id: 'mapbox/streets-v11', /*streets-v11   satellite-v9*/
        tileSize: 512,
        zoomOffset: -1
    }).addTo(mymap);
    
    
    

    
    
    var Emirate_Place = L.icon ({
    iconUrl: 'image/Australian sensor1.png',
    iconSize:     [22, 45], 
    iconAnchor:   [22, 45] 
});
   var Emirate_Place= L.marker([24.4616, 54.3173], {icon: Emirate_Place}).addTo(mymap);
    Emirate_Place.bindPopup("<b>Emirate Palace</b>.");
    
    


   
var silvericon=L.icon ({
    iconUrl: 'image/silver_bin.png',
    iconSize:     [24,45], 
    iconAnchor:   [45, 12] 
});
   var alwahda_mall= L.marker([24.4699, 54.3723], {icon:silvericon}).addTo(mymap);
    alwahda_mall.bindPopup("<b>Alwahda Mall</b>.");
        
var NMC_Hospital = L.icon ({
    iconUrl: 'image/Australian sensor1.png',
    iconSize:     [22, 45], 
    iconAnchor:   [22, 45] 
});
   var NMC = L.marker([24.4839974, 54.3610735], {icon: NMC_Hospital}).addTo(mymap);
    NMC.bindPopup("<b>NMC Hospital Abu Dhabi</b>.");


    
    var dalma_mall = L.icon ({
    iconUrl: 'image/silver_bin.png',
    iconSize:     [22, 45], 
    iconAnchor:   [22, 45] 
});
   var Dalma= L.marker([24.3331, 54.5239], {icon: dalma_mall}).addTo(mymap);
    Dalma.bindPopup("<b>Dalma Mall</b>.");


    
}