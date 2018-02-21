$(document).ready(function(){

	var window_height = window.innerHeight;
	
	view_on_scroll();

	$('.nav-left').click(function(){
		if ( $(this).hasClass('can-click') ) {

			$(this).toggleClass('active').removeClass('can-click');
			
			if ( $('.nav-right').hasClass('active') ) {
				$('.nav-right').find('li').removeClass('open');
				$('.nav-right').delay(400).queue(function(){
					$(this).removeClass('active').dequeue();	
				})
			} else {
				$('.nav-right').addClass('active');
				setTimeout(function(){
					nav_transition(1);
				}, 700)
			}

			setTimeout(function(){ $('.nav-left').addClass('can-click'); }, 1400);
		}
	})

	function nav_transition(index){
		$('.nav-item:nth-child(' + index + ')').addClass('open')

		if ( index <= $('.nav-item').length ) {
			setTimeout(function(){
				nav_transition(index + 1);
			}, 80)
		}
	}

	$(window).scroll(function(){ view_on_scroll(); })

	function view_on_scroll(){
		$('.js-view-on-scroll').each(function(){
			if ( ( ( $(this).offset().top - $(window).scrollTop() ) - window_height ) <= 0 ) {
				$(this).addClass('in-view');
			} else {
				$(this).removeClass('in-view');
			}
		})
	}

	function has_scroll_offset(e){
		console.log(e);
		return i = e == 0 ? 0 : -144;
	}

	$('.nav-item').click(function(){
		$('html, body').delay(1000).animate({
	        scrollTop: ($('.' + $(this).attr('data-target')).offset().top) + has_scroll_offset($(this).index())
	    }, 1200);

		$('.nav-left').toggleClass('active');
	    $('.nav-right').find('li').removeClass('open');
		$('.nav-right').delay(400).queue(function(){
			$(this).removeClass('active').dequeue();	
		})
	})

})
