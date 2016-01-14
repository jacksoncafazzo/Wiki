$(document).ready(function() {
$("button#green").click(function() {
  $("body").removeClass();
  $("body").addClass("green-background");
});

$("button#yellow").click(function() {
  $("body").removeClass();
  $("body").addClass("yellow-background");
});

$("button#red").click(function() {
  $("body").removeClass();
  $("body").addClass("red-background");
});
    var flavors = ["cookie dough","mint","chocolate chip", "strawberry"]

flavors.forEach(function(flavor) {
  $("#flavors").append("<li>" + flavor + "</li>")
});

for(i=99;i>0;i--){
  $("#bottles").append("<li>" + i + " bottles of beer on the wall " + "</li>")
}







});
