'use strict';


window.onload = function() {
  navigator.geolocation.getCurrentPosition(showPosition);
};

$('findMonster').on('click', function(){
  getLocation()
});

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);

  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}


let showPosition=(position)=>{
  console.log('Latitude: '+ position.coords.latitude + 
  '  Longitude: ' + position.coords.longitude);

};


