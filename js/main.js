// $("ul").toggle("hide");

//Metodos de jquery
// .show()
// .hide()
// .slideUp()
// .slideDown()
//.toggle()
// $("ul").hide();

$(".dd-button").on("click",(event)=>{
    //debugger
    $("ul").slideToggle(500);
});