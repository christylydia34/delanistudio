$(document).ready(function(){

$(".clickable1").click(function(){
    $(".design hide ").toggle();
    $(".design show").toggle();
});
    $(".clickable2").click(function(){
        $(".development hide").toggle();
        $(".development show").toggle();
    });

        $(".clickable3").click(function(){
            $(".pm hide").toggle();
            $(".pm show").toggle();
        });

        $(".buttonsubmit").click(function(event) {
            event.preventDefault();
            var user =document.getElementById("name").value;
            alert("Hello there " + user + "your message has been received .");
        
    });
     
});

