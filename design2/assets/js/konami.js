$(document).ready(function(){

	var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
	var input_code = [];
	var count = 0;

	$(document).keydown(function(i){	
		input_code.push( i.which );

		reset_timer( input_code.length );
	})

	function reset_timer(input_code_length){
		if ( input_code.length == code.length && check_success() == true ) {
			kermit_rain();
		}

		setTimeout(function() { if ( input_code.length == input_code_length ) { input_code = []; } }, 400);
	}

	function check_success(){
		for ( i = 0; i < input_code.length; i ++ ) {
			if ( input_code[i] != code[i] ) {
				return false;
			}

			if ( i == (code.length - 1) ) {
				return true;
			}
		}
	}

	function kermit_rain(){
		var left = Math.floor(Math.random() * 100);
		$('body').append('<img src="assets/images/Kermit.png" class="kermit-rain" style="left: ' + left.toString() + '%">');

		setTimeout( function(){ $('.kermit-rain').addClass('fin') }, 2000 );

		$('.fin').remove();
		
		if ( count < 60 ) {
			setTimeout(function(){ kermit_rain(); }, 30);

			count ++;
		}else if ( count == 60) {
			count = 0;
		}
	}

})