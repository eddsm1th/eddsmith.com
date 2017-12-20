$(document).ready(function(){

	$('.js-overlay-title').css('transform','translateY(-' + $('.js-overlay-title').height()/2 + 'px)')

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

	$(window).scroll(function(){
		$('.main-layer-overlay').css('height','calc(50% - ' + ($(document).scrollTop() / 4) + 'px)');
		$('.js-overlay-title').css('transform','translateY(-' + ( ( $('.js-overlay-title').height()/2 ) - ( $(document).scrollTop() / 4 ) ) + 'px)');
	})

})