'use strict';

window.onload(navigator.geolocation.getCurrentPosition(showPosition));
    console.log('Geolocation is not supported by this browser.');


let showPosition=(position)=>{
  console.log('Latitude: '+ position.coords.latitude + 
  '  Longitude: ' + position.coords.longitude);
};