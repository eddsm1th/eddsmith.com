$(document).ready(function(){

	$('.buzzbuzz').css('margin-top','-' + ( ($('.slide1').height() * 0.4).toString() ) + 'px' );

	var current_segment = 1;
	var rain_count = 1;

	// $('.shocking').click( function(){	
	// 	bolt(0);
	// })

	function bolt(starting_length, offsetX, is_sub_strand){
		// var offset_width = event.clientX;
		var offset_width = Math.floor((Math.random() * $('.slide1').width() - 100 ) + 50);
		var offset_height = 0;
		var bolt_length = 0;
		var current_direction; 
		var currentX = offset_width;
		var max_height = Math.floor(Math.random() * $('.slide1').height());
		var change_course_left = false;
		var change_course_right = false;
		var segment_height = 15;
		
		bolt2(offset_width, offset_height, bolt_length, current_direction,currentX, max_height, change_course_left, change_course_right, segment_height);
	}

	function bolt2(offset_width, offset_height, bolt_length, current_direction,currentX, max_height, change_course_left, change_course_right, segment_height){
		
		var segment_rotation = get_rotation();
		var change_course_threshhold = (max_height - bolt_length) / 11;

		if ( ((offset_width - currentX) >= change_course_threshhold) || change_course_left == true ) {

			change_course_left = true;

			if ( segment_rotation > 0  ) {
				segment_rotation *= -1;
			}

			if ( (offset_width - currentX) <= 0  ) {
				change_course_left = false;
			}
		}

		if ( ((offset_width - currentX) <= change_course_threshhold*-1) || change_course_right == true ) {

			change_course_right = true;

			if ( segment_rotation < 0  ) {
				segment_rotation *= -1;
			}

			if ( (offset_width - currentX) >= 0  ) {
				change_course_right = false;
			}
		}

		if ( bolt_length > (max_height - 18) ) {
			if ( currentX > offset_width && segment_rotation < 0 ) {
					segment_rotation *= -1;
			}
			if ( currentX < offset_width && segment_rotation > 0 ) {
					segment_rotation *= -1;
			}
		}
		
		var testing = $('<div id="lightning' + current_segment.toString() + '" class="lightning" style="left: ' + currentX + 'px; top: ' + (bolt_length) + 'px; height: ' + segment_height + 'px; transform: rotate(' + segment_rotation +'deg)"></div>').appendTo( $('.buzzbuzz') );
	
		var testing = $('<div id="lightning' + current_segment.toString() + '" class="lightning" style="left: ' + currentX + 'px; top: ' + (bolt_length) + 'px; height: ' + segment_height + 'px; transform: rotate(' + segment_rotation +'deg) scale(2); filter: blur(10px);"></div>').appendTo( $('.buzzbuzz') );

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

		if ( bolt_length < (max_height) ) {
			$('.lightning').delay(1000).queue(function(){
				$(this).addClass('animation-fin').dequeue();
			});

			$('.animation-fin').remove();

			bolt2(offset_width, offset_height, bolt_length, current_direction,currentX, max_height, change_course_left, change_course_right, segment_height);
		}
	}

	function get_rotation(){
		var rotation = 0;

		while ( rotation == 0 ){
			rotation = (Math.floor((Math.random() * 80) + 1 ))-40;
		}

		return rotation;
	}

	$('.shocking > span').click(function(){
		bolt(0);
	})

	$(function() {
		lightning();
		setInterval(function() { lightning() }, 5);
	});

	function lightning(){
		if ( $(document).scrollTop() < $('.slide1').height() / 2 ) {
			var chance = Math.floor((Math.random() * 500) + 0 );

			if ( chance == 5 ) {
				bolt(0);
			}
		}
	}
})