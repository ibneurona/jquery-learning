// $("ul").toggle("hide");

//Metodos de jquery
// .show()
// .hide()
// .slideUp()
// .slideDown()
//.toggle()
// $("ul").hide();
/* 
.hide("duración",callback) - Oculta el elemento seleccionado
.show("duración",callback) - Muestra el elemento seleccionado
.toggle("duración",callback) - Intercambia el estado del elemento, si esta oculto lo muestra y visceversa
.slideUp("duración",callback) - Oculta el elemento con una animación de deslizado hacia arriba
.slideDown("duración",callback) - Muestra el elemento con una animación de deslizado hacia abajo
.slideToggle("duración",callback) - Intercambia el estado del elemento con animación de deslizamiento
.fadeOut("duración",callback) - Oculta el elemento con una animación de desvanecimiento
.fadeIn("duración",callback) - Muestra el elemento con una animación de aparición gradual
.fadeToggle("duración",callback) - Intercambia el estado del elemento con un efecto de desvanecimiento
.on("event",callback) - Asigna un listener al elemento, recibe como parámetro el evento a asignar y la función que se ejecutará cuando el evento suceda
.trigger("event") - Dispara un evento en el elemento seleccionado. El evento se indica en el parámetro
.remove() - Remueve el elemento seleccionado del DOM
$(selector).find("criterio") - Busca todos los elementos que cumplan con el "criterio" que indiquemos, dentro del $(selector) especificado
$(selector).closest("criterio") - Busca el primer ancestro del $(selector) especificado, que cumpla con el "criterio" que indiquemos
$(selector).parents("criterio") - Busca todos los ancestros del $(selector) especificado, que cumpla con el "criterio" que indiquemos
$(selector).siblings("criterio") - Busca todos los hermanos del $(selector) especificado, que cumpla con el "criterio" que indiquemos
$(selector).hasClass("criterio") - Evalúa si el $(selector) cuenta con la clase "criterio" indicada. Devuelve un booleano
 */
//Aparece y desasparece el menu
// $(".dd-button").on("click",(event)=>{
//     //debugger
//     $("ul").slideToggle(500);
// });

$(".btn").click((event)=>{
    console.log("ntra");
    
    $(event.target).closest(".card-wrapper").fadeOut(2000,()=>{
        $(event.target).closest(".card-wrapper").remove()
    })
})    