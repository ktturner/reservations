//creating a welcome message to display date and day of the week
var dayToday = new Date ();
var dayOfWeekName; //value to be assigned
switch (dayToday.getDay()) {
  case 0:
    dayOfWeekName = 'Sunday' ;
  break;
  case 1:
    dayOfWeekName = 'Monday';
  break;
  case 2:
    dayOfWeekName = 'Tuesday';
  break;
  case 3:
    dayOfWeekName = 'Wednesday';
  break;
  case 4:
    dayOfWeekName = 'Thursday';
  break;
  case 5:
    dayOfWeekName = 'Friday';
  break;
  case 6:
    dayOfWeekName = 'Saturday';
  break;
}

var nameOfMonth; //value to be assigned
switch (dayToday.getMonth()) {
  case 00:
    nameOfMonth = 'January' ;
  break;
  case 01:
    nameOfMonth = 'February';
  break;
  case 02:
    nameOfMonth = 'March';
  break;
  case 03:
    nameOfMonth = 'April';
  break;
  case 04:
    nameOfMonth = 'May';
  break;
  case 05:
    nameOfMonth = 'June';
  break;
  case 06:
    nameOfMonth = 'July';
  break;
  case 07:
  nameOfMonth = 'August'
  break;
  case 08:
  nameOfMonth = 'September'
  break;
  case 09:
  nameOfMonth = 'October'
  break;
  case 10:
  nameOfMonth = 'November'
  break;
  case 11:
  nameOfMonth = 'December'
  break;
}

window.onload = function (){
var dateMessage = "Welcome. Today is " + nameOfMonth + dayToday.getDate() + ", " + dayToday.getFullYear() + ". Happy " + dayOfWeekName +"!";
document.getElementById("dynamicMessage").innerHTML = dateMessage;}


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


var endDate;
//define function to make reservation
function makeReservation() {
  //var -  display msg for reservation
  //var reservationMessage;
  //calculate price of stay based on hotel room type
  /*var roomPrice = document.getElementById('roomType');
  var stayPrice;
  if (roomPrice == 1) {stayPrice = 159 * lengthOfStay;}
    else (roomPrice ==2) {stayPrice = 159 * lengthOfStay;}
    else (roomPrice == 3) {stayPrice = 159 * lengthOfStay;}
    else (roomPrice ==0 ) {//error message;}*/

//calculate endDate

//use string function to construct date from input, then add days from there
//new Date(var, var, var)
  //var dateParts = document.getElementById('checkInDate').split('/');
  var inputDate = document.getElementById('checkInDate').value;
  var dateEntered = new Date(inputDate);
//please put attention to the month (parts[0]), Javascript counts months from 0:
// January - 0, February - 1, etc



  /*var lengthOfStay = document.getElementById('lengthOfStay');
  var addStayDays = startDate.getDate() + lengthOfStay;
  endDate = new Date(startDate.setDate(addStayDays));
  checkOutMessage = "Your check-out date is " + endDate.getMonth() + "/ " + endDate.getDate() + ".";
  //check availability
  if (isAvailable() == true) {
    //print reservation message
    reservationMessage = "We have made your reservation.";
    reservationMessage += "You have reserved " + totalRoomsNeeded() + " rooms. We now have " + newRoomsAvailable() + " rooms available.";
  } else {
    //print message that there are not enough rooms available to make the reservation.
    reservationMessage = "Your request cannot be satisfied.";

  }
  //display reservation message on the html page
  document.getElementById('availableRooms').innerHTML = reservationMessage;*/
  document.getElementById('checkOutDate').innerHTML = dateEntered ;

}
