$(document).ready(function(){


//	$('.sideBar').slideToggle(400);
	$('.sideBar').click( function(){
		$('.sideBar').animate({width: 'toggle'});
		$('#sideBarTab').animate({width: 50px});
	});




});