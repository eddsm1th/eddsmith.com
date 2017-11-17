$(document).ready(function(){

	var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
	var input_code = [];

	$(document).keydown(function(i){	
		input_code.push( i.which );

		reset_timer( input_code.length );
	})

	function reset_timer(input_code_length){
		if ( input_code.length == code.length && check_success() == true ) {
			$('.shipit').css('bottom','0')
		}

		setTimeout(function() { input_code.length == input_code_length ? input_code = [] : console.log('') }, 400);
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

})