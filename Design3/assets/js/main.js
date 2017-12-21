$(document).ready(function(){

	$('.js-overlay-content-wrapper').css('margin-top','-' + $('.js-overlay-content-wrapper').height()/2 + 'px')


	$('.js-header').mousemove(function(){
	    var Xoffset = get_offset(event.clientX, $(this).width())
	    var Yoffset = get_offset(event.clientY, $(this).height())

	  	// X and Y movement
	    $('.header-paralax-js').css('transform','translate(' + Xoffset*-4 + 'px, ' + Yoffset*-4 + 'px) rotateX(' + Yoffset*2 + 'deg) rotateY(' + Xoffset*-2 + 'deg)');

	    $('.header-skew-js').css('transform','skewY(' + Xoffset*0.2 + 'deg)');
	    $('.header-skew-reverse-js').css('transform','skewY(' + Xoffset*-0.2 + 'deg)');
	})

	function get_offset(mouse, browser){
		return (((mouse - (browser / 2))/(browser / 2))*10) * -1;
	}

})