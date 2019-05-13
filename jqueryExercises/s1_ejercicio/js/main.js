/*$(".dd-button").on("click", (event)=>{
	console.log($(event.target))
	$(event.target).siblings("ul").slideToggle("400",()=>{
		setTimeout(()=>{
			$("#second-button").trigger("click");
		},1000)
	});
	//$(event.target).slideToggle("400");
  	//$(".custom-dd-wrapper ul")
})*/

/* $(".custom-dd-wrapper").on("click",(event)=>{
	$(event.target).find("ul").slideToggle();
})

$(".list-item").click((event)=>{
	$(event.target).closest("ul").toggleClass("gray-background red-background")
})

$(".btn").click((event)=>{
	console.log(event.target);
	$(event.target).closest(".card-wrapper").fadeOut(1000,()=>{
		$(event.target).closest(".card-wrapper").remove()
	})

}) */

/*$("#some-id")
$(".some-class")
$("body ul li")
$("body ul>li")
$("#some-id .some-class")
$("#some-id:hover")*/
//document.getElementById("some-id")
/////////////////////////////////////////////////////////////////



$(document).ready(function () {
	
	$("ul").hide();
	$(".dd-button").on("click",() =>{
		$("ul").toggle()
	});
	
	$('.mentor-info').hide();

	$('li').on('click',(event) =>{
		$(event.target).addClass('active')
		$('.active').css({color: '#ABCDEF',})
		$('ul').hide()
		
		var mentor = $(event.target).html()
		console.log(mentor);

		let charles = $('#charles');
		let david = $('#david');
		let isra = $('#isra');

		switch (mentor) {

			case 'Carlos Silva':
				 
				charles.slideDown(1000);
				david.hide(1000);
				isra.hide(1000);
				console.log('chale');
				break;
				
			case 'David Moranchel':
				david.slideDown();
				charles.slideUp(1000);
				isra.hide(1000);
				console.log('chale2');
				break;

			case 'Israel Salinas':
				isra.slideDown();
				david.hide(1000);
				charles.hide(1000);		
				console.log('chale3');
				break;

			default:
				break;
		}
	});

		
});