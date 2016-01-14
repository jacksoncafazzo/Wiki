$(document).ready(function() {
  var question = prompt("Do you like snakes, turtles or insects?");

  if(question === ("snakes")) {
    $('#snakes').show();
  }
  if(question === ("turtles")) {
    $('#turtles').show();
  }
  if(question === ("insects")) {
    $('#insects').show();
  }


});
