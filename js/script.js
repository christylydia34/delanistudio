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
});


            function validateForm() {
                var name = document.getElementById("name").value
                var email = document.getElementById("email").value


                if (name == ""){
                    alert("Please fill in your name");
                    return false;
                    
                }
                else if (email == ""){
                    alert("PLease fill in your email")
                }
                else {
                    alert(name + ", We have recieved your details. Thank you for reaching out")
                }
            }
                


              

        


     


