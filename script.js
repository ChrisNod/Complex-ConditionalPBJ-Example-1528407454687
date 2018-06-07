function mysterySandwich(ing1,ing2){
    if (ing1 === "peanut butter" && ing2 === "jelly" || ing1 === "jelly" && ing2 === "peanut butter"){
         $(".text").text("This is for Beyonce!");
         $("img").attr("src", "http://kickscount.vibrantpulse.netdna-cdn.com/wp-content/uploads/2017/02/beyonce-121313.jpg");
    }
    else if (ing1 === "peanut butter" && ing2 === "jam" || ing1 === "jam" && ing2 === "peanut butter"){
         $(".text").text("This is for Jay Z!");
         $("img").attr("src", "http://dailypost.ng/wp-content/uploads/2017/06/Jay-Z.jpg");
    }
    
    
    // Step 2: Add an option for straight or diagonal cuts (B likes diagonal, J likes straight)
    // Hint: You'll have to update the click handler below!
}

$("button").click(function(){
    var ing1 = $("#ing1").val();
    var ing2 = $("#ing2").val();
    mysterySandwich(ing1,ing2);
});

$(".button2").click(function(){
    var cut1 = $("#cut1").val();
    mysterySlice(cut1);
});

function mysterySlice(cut1){
    
if ("cut1" === "diagonal"){
         $(".text").text("This is for Beyonce!");
         $("img").attr("src", "http://kickscount.vibrantpulse.netdna-cdn.com/wp-content/uploads/2017/02/beyonce-121313.jpg");
    }
    else if ("cut1" === "straight"){
         $(".text").text("This is for Jay Z!");
         $("img").attr("src", "http://dailypost.ng/wp-content/uploads/2017/06/Jay-Z.jpg");
    }
    
}




