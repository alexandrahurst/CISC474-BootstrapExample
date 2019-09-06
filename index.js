$(function(){
    //this code runs after page is fully loaded
    $("#nameform").submit(function(event) {
        event.preventDefault();
        let fname = $("#fname").val();
        let lname = $("#lname").val();
        $(".jumbotron").removeClass("d-none").html("<h1>" + fname + " " + lname + "</h1>");
        return false;
    });
});
