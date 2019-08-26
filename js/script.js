$(document).ready(function(){

$(".clickable1").click(function(){
    $(".design hide ").toggle();
    $(".design show").toggle();
});
    $("#dev1").click(function(){
        $(".development ").toggle(1000);
      
    });

        $("#pm1").click(function(){
            $(".product-management").toggle(1000);
            // $(".product-management").toggle();
        });

        $(".buttonsubmit").click(function(event) {
            event.preventDefault();
            var user =document.getElementById("name").value;
            alert("Hello there " + user + "your message has been received .");
        
    });
     
});

