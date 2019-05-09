function getData(){
    $.ajax({
        url: "https://jquerycrud-ed8dc.firebaseio.com/dogs.json",
        type: "GET",
        success: function(response){
            console.log(response);
        }
    });
}

var postObject = {
  'name': 'Gogdo',
  'breed': 'Black Cat'
}

function postData(){
    $.post( "https://jquerycrud-ed8dc.firebaseio.com/dogs.json", JSON.stringify(postObject), function( data ) {
  console.log( data);
}, "json");
}

function updateData(){
    $.ajax({
       url: 'https://jquerycrud-ed8dc.firebaseio.com/dogs/-LeJgLYcUIR1OwHL49pW.json',
       type: 'PUT',
       data: JSON.stringify(postObject),
       success: function(response) {
         console.log(response)
       }
    });
}

function deleteData(){
    $.ajax({
       url: 'https://jquerycrud-ed8dc.firebaseio.com/dogs/-LeJgLYcUIR1OwHL49pW.json',
       type: 'DELETE',
       success: function(response) {
         console.log(response)
       }
    });
}

$(".container-wrapper").load("views/main.html");


$("#adop").click(() =>{
  $(".container-wrapper").load("views/adoption.html")
});

$("#loadPet").click(() =>{
  $(".container-wrapper").load("views/register.html")
});

$(".navbar-brand").click(() =>{
  $(".container-wrapper").load("views/main.html")
});
