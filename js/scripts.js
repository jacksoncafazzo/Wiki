$(document).ready(function() {
    var flavors = ["cookie dough","mint","chocolate chip", "strawberry"]

    flavors.forEach(function(flavor) {
      $("#flavors").append("<li>" + flavor + "</li>")
    });

/*
    var total = 0;
    numbers = [1, 2 ,3 ,4];

    numbers.forEach(function(number) {
      $("#flavors").text(total += number);
    })
    */
});
