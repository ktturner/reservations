var maxRooms = 15;
var maxPeoplePerRoom = 4;

// Use anonymous function to include information on the page
var availableSpots = function (){
  return maxRooms * maxPeoplePerRoom;
};

/* Use immediately invoked function expression to display the available
   information to the page
var displayAvailableSpots = (function () {
  var myWindow=window.open ("", "_self", "",true);
  myWindow.document.write("<h3>There are " + maxRooms + " rooms and " + availableSpots() + " beds available.</h3>");
}());*/

//create function to calculate total rooms needed
function totalRoomsNeeded (){
  var numGuests = document.getElementById('numberOfGuests').value;
  var roomsNeeded = Math.ceil(numGuests / maxPeoplePerRoom);
  return roomsNeeded;
}

//create function to compare roomsNeeded with roomsAvailable and return boolean
function isAvailable () {
  var isAvailableValue = true;
  if (totalRoomsNeeded () > maxRooms) {
    isAvailableValue = false;
  }
  return isAvailableValue;
}

//define function to check availability
function checkAvailability (){
  //construct and display msg for room availability
  var availableMessage;
  if (isAvailable() == true) {
    availableMessage = "Your request can be satisfied.";
  } else {
    availableMessage = "Your request cannot be satisfied.";
  }
  availableMessage += "You need " + totalRoomsNeeded() + " rooms.";
  availableMessage += "We have " + maxRooms + " rooms available.";
  //displays reservation message on the html page
  document.getElementById('availableRooms').innerHTML = availableMessage;

}

//function to calculate number of rooms available after the reservation is made.
var newRoomsAvailable = function() {return maxRooms - totalRoomsNeeded()};



//define function to make reservation
function makeReservation() {
  //var -  display msg for reservation
  var reservationMessage;
    //check availability first
  if (isAvailable() == true) {
    //print reservation message
    reservationMessage = "We have made your reservation.";
    reservationMessage += "You have reserved " + totalRoomsNeeded() + " rooms. We now have " + newRoomsAvailable() + " rooms available.";
  } else {
    //print message that there are not enough rooms available to make the reservation.
    reservationMessage = "Your request cannot be satisfied.";

  }
  //display reservation message on the html page
  document.getElementById('availableRooms').innerHTML = reservationMessage;
}
