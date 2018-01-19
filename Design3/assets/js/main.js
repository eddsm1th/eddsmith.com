$(document).ready(function(){

	$('.js-overlay-title').css('margin-top','-' + $('.js-overlay-title').height()/2 + 'px')


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



	var max_num = 100;
	var counter = 0;
	var const_line = max_num/2;
	var triNum = triNumCalc(const_line);
	var delay = triNum;
	var trueDelay = 0;

	counter_js();

	function counter_js(){

		$('.counter-js').html(counter.toString());
		delay -= counter;
		trueDelay = triNum - delay;
		counter ++;

		if ( counter <= max_num ) {
			setTimeout(function(){
				counter_js();
			}, trueDelay*0.04)	
		}
	}

	function triNumCalc(varNum){
		return ( varNum * (varNum + 1 ) ) / 2; 
	}

})