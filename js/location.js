'use strict';
//gets user permission to use location and then calls the showPosition

//lnked to location .js gets current location
window.onload = function() {
  navigator.geolocation.getCurrentPosition(showPosition);
};


//Listens for click on button and gets current location.
//Referance location JS
$('#findMonster').submit(getLocation);



//gets location based on current device location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
}

//Show position takes the current lat long and posts it to a hidden form used to append the lat and long to the DOM.
let showPosition=(position)=>{
  $('#curLoc').text('Current Lat: ' + position.coords.latitude + ', Current Long: ' + position.coords.longitude);
  $('#currentLong').val(position.coords.longitude);
  $('#currentLat').val(position.coords.latitude);
  $('#curButton').prop('disabled', false);
};
