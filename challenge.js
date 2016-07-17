$(document).ready(function() {
/*Make Buttons*/
"use strict";
var numOfButtons = 9;
var buttonVal = 0;
for(var i = 0; i <= numOfButtons; i++) {
        $("#buttons").append("<button>" + i + "</button>");
        $("#buttons").find("button:last").addClass("" + i);
    }
  /*Append "<p>"*/
  $("body").append("<p></p>");
    var isStored = false;
 /*Click Handler*/
 var buttonVal1 = 0;
 var buttonVal2 = 0;
 var clicks = 0;
 var sum = 0;
 $("button").on("click", function () {
 switch(clicks){
   case 0:
     buttonVal1 = parseInt($(this).attr("class"));
     sum += parseInt($(this).attr("class"));
     clicks++ ;
     $(".sum").append("<p>" + buttonVal1 + "</p>");
     break;
   case 1:
     buttonVal2 = parseInt($(this).attr("class"));
     sum += parseInt($(this).attr("class"));
     clicks++ ;
     $(".sum").empty();
     $(".sum").append("<p>" + buttonVal1 + " + " + buttonVal2 + " = " + sum + "</p>");
     break;
   case 2:
     clicks = 1;
     sum = 0;
     buttonVal1 = parseInt($(this).attr("class"));
     sum += parseInt($(this).attr("class"));
     $(".sum").empty();
     $(".sum").append("<p>" + buttonValue1 + "</p>");
     break;
    }
    console.log(sum);
  });





});
