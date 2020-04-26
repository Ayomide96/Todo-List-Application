// check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");

	/*// if li is gray
	if($(this).css("color") === "rgb(128, 128, 128)"){
    //turn it black 
  $(this).css({
        color: "black",
        textDecoration: "none"
	});
	}
	//else
	else{
	//turn it gray
	$(this).css({
        color: "gray",
        textDecoration: "line-through"
	});
}*/
}); 

//click on X to delete todo
//evt could be anything
$("ul").on("click", "span", function(evt){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	}); 
	evt.stopPropagation();
});

$("input[type='text'").keypress(function(evt){
	if(evt.which === 13){
     //grabbing new todo from input
     var todoText = $(this).val();
     $(this).val("");
     //create a new li and add to ul
     $("ul").append("<li><span><i class='fas fa-minus-circle'></i></span> " + todoText + "</li>")
	}
})

$(".fa-calendar-plus").click(function(){
	$("input[type='text'").fadeToggle();
})
