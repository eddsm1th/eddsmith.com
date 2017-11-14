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

	$(window).scroll( function() {
		get_scroll_position();
	} )

	$('.explore-more-btn').click(function(){
		scroll_to(2);
	})

	$(".nav-button").click(function(){
		scroll_to($(this).index() + 1);
	});

	function get_offset(mouse, browser){
		return (((mouse - (browser / 2))/(browser / 2))*10) * -1;
	}

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

	// PONG

	var ball = $('.ball');
	var player = $('.player');
	var opponent = $('.opponent');
	var page_width = $('.pong-wrap').width();
	var page_height = $('.pong-wrap').height();	

	ball.css({'left':'' + (page_width/2) + 'px','top':'' + (page_height/2) + 'px'})

	var current_ballX = page_width/2;
	var current_ballY = page_height/2;

	var current_playerY = page_height/2;

	var current_opponentY = page_height/2;

	var directionX = 1;
	var directionY = 0;

	var speed = 2;
	var player_speed = 1;

	var mouseY;

	var player_score = 1;
	var opponent_score = 1;

	var in_view = false;

	$('.player_score, .opponent_score').html('0');

	function move_ball(){
		if ( in_view == true ) {
			ball.css('left','' + (current_ballX + (speed * directionX)) + 'px');
			ball.css('top','' + (current_ballY + (speed * directionY)) + 'px');

			current_ballX = (current_ballX + (speed * directionX));
			current_ballY = (current_ballY + (speed * directionY));

			if ( current_ballX > ( page_width - 11 ) ) {
				directionX = -1;

				$('.player_score').html(player_score ++);

				current_ballX = page_width/2;
				current_ballY = page_height/2;
			}
			else if ( current_ballX < 11 ) {
				directionX = 1;

				$('.opponent_score').html(opponent_score ++);

				current_ballX = page_width/2;
				current_ballY = page_height/2;
			}

			if ( current_ballY > ( page_height - 11 ) ) {
				directionY *= -1;
			}
			else if ( current_ballY < 11 ) {
				directionY *= -1;
			}

			if ( ( current_ballX < 93 && current_ballX > 89 ) ) {
				if ( ( current_ballY > ( current_playerY - 80 ) ) && ( current_ballY < ( current_playerY + 80 ) ) ) {
					var x = current_ballY - (current_playerY - 70 );

					x = x/140;

					x *= 2;

					x -= 1;

					directionX = 1;
					directionY = x;
				} 
			}
			else if ( ( current_ballX > (page_width - 93) && current_ballX < (page_width - 89) ) ) {
				if ( ( current_ballY > ( current_opponentY - 80 ) ) && ( current_ballY < ( current_opponentY + 80 ) ) ) {
					var x = current_ballY - (current_opponentY - 70 );

					x = x/140;

					x *= 2;

					x -= 1;

					directionY = x;
					directionX = -1;
				} 
			}
		}
	}

	function move_player(){
		if ( current_playerY > mouseY ) {
			current_playerY -= (player_speed * 1);

			player.css('top','' + current_playerY + 'px');
		}
		else if ( current_playerY < mouseY ) {
			current_playerY += (player_speed * 1);

			player.css('top','' + current_playerY + 'px');
		}
	}

	function move_opponent(){
		if ( current_opponentY > current_ballY ) {
			current_opponentY -= (player_speed * 1);

			opponent.css('top','' + current_opponentY + 'px');
		}
		else if ( current_opponentY < current_ballY ) {
			current_opponentY += (player_speed * 1);

			opponent.css('top','' + current_opponentY + 'px');
		}

		if ( ($('.slide3').offset().top - $(window).scrollTop()) == 0 ) {
			in_view = true;
		}else{
			in_view = false;
		}
	}

	$('.pong-wrap').mousemove( function(){
		mouseY = event.clientY;
	})

	$(function() {
		move_ball();
		setInterval(function() { move_ball() }, 5);
	});

	$(function() {
		move_player();
		setInterval(function() { move_player() }, 5);
	});

	$(function() {
		move_opponent();
		setInterval(function() { move_opponent() }, 5);
	});

	//PONG END

	//
	//	LIGHTNING
	// 	START
	//

	var current_segment = 1;
	var rain_count = 1;

	var lightning_positions = [[10,30]]

	$('.shocking').click( function(){	
		bolt(0);
	})

	function bolt(starting_length, offsetX, is_sub_strand){
		var offset_width = 70;
		var offset_height = 0;
		var bolt_length = 26;
		var current_direction; 
		var currentX = offset_width;
		
		bolt2(offset_width, offset_height, bolt_length, current_direction,currentX);

		$('.lightning').delay(500).queue(function(){
			$(this).addClass('animation-fin').dequeue();
		});

		$('.animation-fin').remove();
	}

	function bolt2(offset_width, offset_height, bolt_length, current_direction,currentX){
		var segment_height = Math.floor((Math.random() * 15) + 1);
		var segment_rotation = get_rotation();

		var testing = $('<div id="lightning' + current_segment.toString() + '" class="lightning" style="left: ' + currentX + 'px; top: ' + (bolt_length) + 'px; height: ' + segment_height + 'px; transform: rotate(' + segment_rotation +'deg)"></div>').appendTo( $('.buzzbuzz') );

		var width = document.getElementById('lightning' + current_segment.toString()).getBoundingClientRect().width;
		var height = document.getElementById('lightning' + current_segment.toString()).getBoundingClientRect().height;

		if ( segment_rotation > 0 ) {
			if ( current_direction == 1 ) { currentX += 4; }

			$('#lightning' + current_segment.toString()).css('left',(currentX - 2)-((width/2)) + 'px');

			currentX -= width;

			current_direction = 1;
		} else {
			if ( current_direction == 0 ) { currentX -= 4; }

			$('#lightning' + current_segment.toString()).css('left',(currentX - 2)+((width/2)) + 'px');

			currentX += width;

			current_direction = 0;
		}

		bolt_length += (height - 4);

		current_segment ++;

		if ( bolt_length < ( 28 + 20 ) ) {
			setTimeout(function(){
				bolt2(offset_width, offset_height, bolt_length, current_direction,currentX);
			}, 40);
		}
	}

	function get_rotation(){
		var rotation = 0;

		while ( rotation == 0 ){
			rotation = (Math.floor((Math.random() * 100) + 1 ))-50;
		}

		return rotation;
	}

	$(function() {
		lightning();
		setInterval(function() { lightning() }, 5);
	});

	function lightning(){
		var chance = Math.floor((Math.random() * 100) + 0 );

		if ( chance == 5 ) {
			bolt(0);
		}
	}

	//
	//	LIGHTNING
	//	END
	//
})