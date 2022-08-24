function startMap(){
    let coordinates = {lat: 40.7042776 ,lng: -73.9945783};
    let map = new google.maps.Map(document.getElementById("map"),{
        zoom: 10,
        center: coordinates
    });

    let marker = new google.maps.Marker({
        position: coordinates,
        map: map
    });
}
