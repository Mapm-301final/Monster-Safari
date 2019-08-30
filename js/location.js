'use strict';

//gets user permission to use location and then calls the showPosition 

//lnked to location .js gets current location
window.onload = function() {
  navigator.geolocation.getCurrentPosition(showPosition);
};


//Listens for click on button and gets current location.
//Referance location JS
$('#findMonster').click(getLocation);


//gets location based on current device location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}


let showPosition=(position)=>{
  $.post('/currentLocation',
    {currentlocation: position},
    console.log('om in the function to append' ),
    function(location, status) {
      console.log('om in the function to append' );
      $('p').append('status: ' + status + ', data: ' + location);
    });
};



// $.post('/jquery/submitData',   // url
//    { myData: 'This is my data.' }, // data to be submit
//    function(data, status, jqXHR) {// success callback
//       $('p').append('status: ' + status + ', data: ' + data);
//   });
// });


