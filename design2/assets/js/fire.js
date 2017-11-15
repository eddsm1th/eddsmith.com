$(document).ready(function(){
	function spawn(mouseX, mouseY, count){
		var Yoffset = (Math.floor((Math.random() * 20) + 1)) - 10;
		var offset = (Math.floor((Math.random() * 20) + 1)) - 10;
		var dimensions = Math.floor((Math.random() * 10) + 20);
		var colour = Math.floor((Math.random() * 70) + 80)

		$('.fire-wrap').append("<div class='fire' style='background: rgb(255," + colour + ",0);margin-top: " + (mouseY + Yoffset*1.3) + "px; margin-left: " + (mouseX + offset*1.3) + "px; width: " + dimensions + "px; height: " + dimensions + "px;'></div>");
		
		$('.fire').delay(900).queue(function(){
			$(this).addClass('fire-fin');
		});

		$('.fire-fin').remove();

		if ( count < 80 ) {
			count ++;

			setTimeout(function(){
					spawn(mouseX, mouseY, count);
			}, 6);
		}
	}

	function get_spawn(){
		var mouseY = event.clientY;
		var mouseX = event.clientX;
		var count = 0;

		spawn(mouseX, mouseY, count);
	}

	$('.shocking > span').click(function(){
		get_spawn();
	})
})