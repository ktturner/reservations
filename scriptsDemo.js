//create object using literal notation
//Step 1: Define object as variable followed by braces
//Step 2: Define properties (variables) and methods (function)
//Note: Seperate each property and method using comma
var hotelLiteral = {
  name:'Kristi Place',
  rooms: 25,
  booked: 10,
  checkAvailability: function (){
   return this.rooms - this.booked;
  }
};
//use dot notation to access properties and methods associated with objects
//alert ("hotelLiteral: " + hotelLiteral.name + " - " + hotelLiteral.checkAvailability());

//Create an object using Constructor Notation
//Step 1:Define the object as a variable using new Object()
//Step 2: Define each property and method using dot notation

var hotelConstructor = new Object ();
hotelConstructor.name = 'Kristi Place';
hotelConstructor.rooms = 25;
hotelConstructor.booked = 9;
hotelConstructor.checkAvailability = function (){
  return this.rooms - this.booked;
};

//use dot notation to access properties and methods associated with objects
//alert ("hotelConstructor: " + hotelConstructor.name + " - " + hotelConstructor.checkAvailability() );

//Create object that can be used for multiple values
//Step 1: Create object template
//Step 2: Define object using function that accepts parameters that will be used to assign values to properties
//Step 3: Define properties and methods using this keyword

function Hotel(nameParm, roomsParm, bookedParm) {
  this.name = nameParm;
  this.rooms = roomsParm;
  this.booked = bookedParm;
  this.checkAvailability = function () {
    return this.rooms - this.booked;
  }
};

//Create many objects using the template
var aHotel = new Hotel ('Kristi Place', 25, 8);
//alert("Hotel: " + aHotel.name + " - " + aHotel.checkAvailability());

var bHotel = new Hotel ('Greg Place', 15, 5);
var totalAvailable = aHotel.checkAvailability() + bHotel.checkAvailability();
//alert (totalAvailable);

//demo random generator
//Create random number between low value and high value
//Step 1: use Math.random to get random number between 0 and 1
//Step 2: Multiply the result by whatever the high value is
//Step 3: use Math.floor to find closest integer down from decimal
//Step 4: add 1 to get random number up to the high value
var randomNumber = (Math.floor(Math.random() * 5) + 1);
//alert(randomNumber);

//generate random number named random week day - between 0 and 6
var randomWeekday = (Math.floor(Math.random() * 6));
//figure out day of week given to us by the numbers
//0 = Sunday, 6 = Saturday... need to use our own logic to find out the values
//use switch statement to associate name with number for weekday
var dayOfWeekName; //value to be assigned
switch (randomWeekday) {
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

//alert(dayOfWeekName);

//welcome message for reservations page



//use conditional logic to check for weekend
var today  = new Date();
var isWeekend  = (today.getDay() >= 5 || today.getDay() == 0);
alert("Today is " + today+ " Number: " + today.getDay() + " isWeekend: " + isWeekend);


/*create a function that starts with a date, and a number of days to add to the Date
in order to generate an end date. Create an IIFE*/

var endDate
(function() {
  //take a begining date and add a number of days to that date.
  var startDate = new Date(2020, 01, 26);
  var lengthOfStay = 15;
  var addStayDays = startDate.getDate() + lengthOfStay;

  {endDate = new Date(startDate.setDate(addStayDays));}
/*for (i=1, i <= lengthOfStay, i++) {

}*/
} ());
alert(endDate);
