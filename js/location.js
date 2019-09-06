'use strict';
//gets user permission to use location and then calls the showPosition

//lnked to location .js gets current location
window.onload = function() {

  //Show position takes the current lat long and posts it to the server to be used in weather call, it also appends the lat and long to the DOM.
  navigator.geolocation.getCurrentPosition(showPosition);
};


//Listens for click on button and gets current location.
//Referance location JS
$('#findMonster').click(getLocation, function(){
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
};
// $.post('/jquery/submitData',   // url
//    { myData: 'This is my data.' }, // data to be submit
//    function(data, status, jqXHR) {// success callback
//       $('p').append('status: ' + status + ', data: ' + data);
//   });
// });


// fire an event for a form submit that calls callback
// prevent a default 
// make ajax calll to backend with content form form 
// when i have lat long in frontend make the api call to google maps api