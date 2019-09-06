'use strict';
//gets user permission to use location and then calls the showPosition

//lnked to location .js gets current location
window.onload = function() {
  //Show position takes the current lat long and posts it to the server to be used in weather call, it also appends the lat and long to the DOM.
  navigator.geolocation.getCurrentPosition(showPosition);
};


//Listens for click on button and gets current location.
//Referance location JS
$('#findMonster').submit(getLocation, function(){
  // $('#subToDB').removeClass('hide-me');
});



//gets location based on current device location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}


let showPosition=(position)=>{
  console.log(position.coords.latitude);
  $('#curLoc').text('Current Lat: ' + position.coords.latitude + ', Current Long: ' + position.coords.longitude);
  $('#currentLong').val(position.coords.longitude);
  $('#currentLat').val(position.coords.latitude);
  $('#curButton').prop('disabled', false);
};
