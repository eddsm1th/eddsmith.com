$(document).ready(function(){
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
})