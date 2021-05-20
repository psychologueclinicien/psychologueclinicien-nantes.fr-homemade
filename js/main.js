$(document).ready(function(){
    $(".hamburg").on("click", function(){
            $("nav ul").toggleClass("menu");
        });
});

$(document).ready(function(){
    $("nav ul").on("click", function(){
            $("nav ul").toggleClass("menu");
        });
});
