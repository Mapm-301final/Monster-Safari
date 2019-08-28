'use strict';


window.onload = function() {
 navigator.geolocation.getCurrentPosition(showPosition);

};

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//     return response;

//   } else {
//     console.log('Geolocation is not supported by this browser.');
//   }
// }

let showPosition=(position)=>{
  console.log('Latitude: '+ position.coords.latitude + 
  '  Longitude: ' + position.coords.longitude);
};

