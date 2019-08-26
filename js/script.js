$(document).ready(function(){

$("#des1").click(function(){
    $(".designol").toggle(1000);
 
});
    $("#dev1").click(function(){
        $(".developmentil").toggle(1000);
      
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

    $(".work4").mouseenter(function(){
        $("text4").show("slow");
    })
     
});

