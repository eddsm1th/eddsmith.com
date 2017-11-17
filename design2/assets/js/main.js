$(document).ready(function(){
	get_scroll_position();

	$(window).mousemove(function(){
	    var Xoffset = get_offset(event.clientX, $( window ).width())
	    var Yoffset = get_offset(event.clientY, $( window ).height())

	    $('.paralax').css('transform','translate(' + Xoffset + 'px, ' + Yoffset + 'px)');
	    $('.paralax-double').css('transform','translate(' + (Xoffset*2) + 'px, ' + (Yoffset*2) + 'px)');
	    $('.paralax-negative').css('transform','translate(' + (Xoffset*-1) + 'px, ' + (Yoffset*-1) + 'px)');
	    $('.paralax-negative-double').css('transform','translate(' + (Xoffset*-2) + 'px, ' + (Yoffset*-2) + 'px)');
	})
	function get_offset(mouse, browser){
		return (((mouse - (browser / 2))/(browser / 2))*10) * -1;
	}

	$(window).scroll( function() {
		get_scroll_position();
	} )

	$('.explore-more-btn').click(function(){
		scroll_to(2);
	})

	$(".nav-button").click(function(){
		scroll_to($(this).index() + 1);
	});

	

	function get_scroll_position(){
		var scrollTop = $(window).scrollTop();
		var current_slide = 1;

		while ( current_slide <= $('.slide').length ) {
			$('.slide-' + current_slide.toString() + '-wrap').css('top','calc(40% + ' + ((scrollTop - ( $('.slide1').height() * (current_slide-1) )).toString()) + 'px)');

			current_slide++;
		}
	}

	function scroll_to(page_index){
		if ( ( $(window).scrollTop() / ($('.slide1').height()) ) + 1 != page_index ) {
			$('.slide-wrap').fadeOut().delay(2000).queue(function(){
				$(this).fadeIn().dequeue();
			});

	        $('html, body').delay(400).animate({
	            scrollTop: $(".slide" + page_index.toString()).offset().top
	        }, 2000);
	    }
	}
})