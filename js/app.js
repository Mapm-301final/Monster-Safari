'use strict';

//gets user permission to use location and then calls the showPosition 

//lnked to location .js gets current location
window.onload = function() {
  navigator.geolocation.getCurrentPosition(showPosition);
};
//Listens for click on button and gets current location.
$('#findMonster').click(getLocation);
$let searchQuery = $('#input').val().toLowerCase();


