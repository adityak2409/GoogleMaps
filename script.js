function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 19.218330, lng: 72.978088},
        zoom: 8,
        mapId: '1d2f99545f257bec'
        });

       const markers=[
        [
            "Aditya House",
            19.218330,
            72.978088,
            "house.svg",
            38,31
        ],
        [
            "Aditya House",
            19.232322,
            72.232233,
            "house.svg",
            38,31
        ],
        [
            "Aditya House",
            19.333434,
            72.488488,
            "house.svg",
            38,31
        ],
        [
            "Aditya House",
            19.343833,
            72.344343,
            "house.svg",
            38,31
        ],
        [
            "Aditya House",
            19.575899,
            72.473377,
            "house.svg",
            38,31
        ]
       ];
       for(let i=0;i<markers.length;i++){
        const currMarker = markers[i];

        const marker =new google.maps.Marker({
            position:{ lat:currMarker[1],lng:currMarker[2]},
            map,
            title:currMarker[0],
            icon:{
                url:currMarker[3],
                scaledSize: new google.maps.Size(currMarker[4],currMarker[5])
            },
            animation:google.maps.Animation.Drop
        })
        const infowindow = new google.maps.InfoWindow({
            content: currMarker[0],
          });
          marker.addListener("click", () => {
            infowindow.open(map,marker);
          });
       }

     
}