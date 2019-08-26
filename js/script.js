function validateForm() {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value


    if (name == "") {
        alert("Please fill in your name");
        return false;

    }
    else if (email == "") {
        alert("PLease fill in your email")
    }
    else {
        alert(name + ", We have recieved your details. Thank you for reaching out")
    }
}





$(document).ready(function () {

    $("#des1").click(function () {
        $(".designol").toggle(1000);

    });
    $("#dev1").click(function () {
        $(".developmentil").toggle(1000);

    });

    $("#pm1").click(function () {
        $(".product-management").toggle(1000);

    });



    $("#work4")
    .mouseenter(function () {
        $("#text4").show("slow");
    })
    .mouseleave(function () {
        $("#text4").hide("slow");
    });
    $("#work3")
    .mouseenter(function () {
        $("#text3").show("slow");
    })
    .mouseleave(function () {
        $("#text3").hide("slow");
    });
    $("#work2")
    .mouseenter(function () {
        $("#text2").show("slow");
    })
    .mouseleave(function () {
        $("#text2").hide("slow");
    });
    $("#work1")
    .mouseenter(function () {
        $("#text1").show("slow");
    })
    .mouseleave(function () {
        $("#text1").hide("slow");
    });
    $("#work8")
    .mouseenter(function () {
        $("#text8").show("slow");
    })
    .mouseleave(function () {
        $("#text8").hide("slow");
    });
    $("#work7")
    .mouseenter(function () {
        $("#text7").show("slow");
    })
    .mouseleave(function () {
        $("#text7").hide("slow");
    });
    $("#work6")
    .mouseenter(function () {
        $("#text6").show("slow");
    })
    .mouseleave(function () {
        $("#text6").hide("slow");
    });
    $("#work5")
    .mouseenter(function () {
        $("#text5").show("slow");
    })
    .mouseleave(function () {
        $("#text5").hide("slow");
    });
});
 

    

    



