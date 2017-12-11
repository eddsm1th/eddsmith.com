$(document).ready(function(){

	$(window).mousemove(function(){
	    var Xoffset = get_offset(event.clientX, $( window ).width())
	    var Yoffset = get_offset(event.clientY, $( window ).height())


	  	// X and Y movement
	    $('.paralax-js').css('transform','translate(' + Xoffset*-2 + 'px, ' + Yoffset*-2 + 'px) rotateX(' + Yoffset*2 + 'deg) rotateY(' + Xoffset*-2 + 'deg)');

	     $('.skew-js').css('transform','skewY(' + Xoffset*0.2 + 'deg) translateY(-13%)');
	     $('.skew-reverse-js').css('transform','skewY(' + Xoffset*-0.2 + 'deg)');
	})

	function get_offset(mouse, browser){
		return (((mouse - (browser / 2))/(browser / 2))*10) * -1;
	}

})