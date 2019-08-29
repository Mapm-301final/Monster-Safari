'use strict';

//gets user permission to use location and then calls the showPosition 
window.onload = function() {
  navigator.geolocation.getCurrentPosition(showPosition);
};

$('#findMonster').click(getLocation);


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


