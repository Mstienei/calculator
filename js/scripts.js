// Business (or back-end) logic:

var add = function(number1, number2) {
 return number1 + number2;
};
var subtract = function(number1, number2) {
 return number1 - number2;
};
var multiply = function(number1, number2) {
 return number1 * number2;
};
var divide = function(number1, number2) {
 return number1 / number2;
};

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
$("form#add").submit(function(event) {
event.preventDefault();
var number1 = parseInt($("#add1").val());
var number2 = parseInt($("#add2").val());
var result = add(number1, number2);
$("#output").text("Answer =" + result);
});
$("form#subtract").submit(function(event) {
event.preventDefault();
var number1 = parseInt($("#subtract1").val());
var number2 = parseInt($("#subtract2").val());
var result = subtract(number1, number2);
$("#output").text("Answer =" + result);
});
$("form#multiply").submit(function(event) {
event.preventDefault();
var number1 = parseInt($("#multiply1").val());
var number2 = parseInt($("#multiply2").val());
var result = multiply(number1, number2);
$("#output").text("Answer =" + result);
});
$("form#divide").submit(function(event) {
event.preventDefault();
var number1 = parseInt($("#Divide1").val());
var number2 = parseInt($("#Divide2").val());
var result = divide(number1, number2);
$("#output").text("Answer =" + result);
});
});
