$(document).ready(function(){

	$('.nav-left').click(function(){ 
		$(this).toggleClass('active');
		$('.nav-right').toggleClass('active'); 
	})

})