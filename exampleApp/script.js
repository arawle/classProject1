
$(function() {

	$('.buttons').on('click', 'span', function(){
		console.log(   );

		var lcd = $('#screen').html();
		var keyVal = $(this).html();

		if ( $(this).attr('id') === 'calc' ) {
			equals(lcd);
		} else if ( $(this).attr('id') === 'cancel' ){
			$('#screen').html(null);
		} else if ($(this).attr('id') === '=')
			equals(lcd);
		else {
			//displays pushed buttons on screen
			$('#screen').text( lcd + keyVal );
		}

	});	

	function equals (lcdVal) {
		// convert the lcdVal into a string which can be evaluated using math.eval
		var newLcd = '';
		// tell what to push to newLcd when the character encountered is unknown
		var	divide = '\u00F7';
		var pi = '\u03A0';
		var degrees = '\u00B0';
		var multiply = '\u00D7';
		var fx = '\u0192';
		var equalNotTotal = '\u003D';

		// create the newLcd by looping through each input. Special cases for unknown characters like 
		// divide, multiply, and fx
		for (var i = 0; i < lcdVal.length; i++){
			if (lcdVal[0] === fx) {
				useFunction(lcdVal);
			} else if (lcdVal[i] === divide){
				newLcd = newLcd + '/';
			} else if (lcdVal[i] === pi) {
				newLcd = newLcd + 'pi';
			}else if (lcdVal[i] === degrees) {
				newLcd = newLcd + '(deg)';
			}else if (lcdVal[i] === multiply) {
				newLcd = newLcd + '*';
			} else {
				newLcd = newLcd + lcdVal[i];
			}
		// output the answer to the string
		}$('#screen').text(math.eval(newLcd));
	}

	// if the value of i[0] === var fx (defined in equals()) this function will be run to solve
	function useFunction (lcdVal) {
		// require plot.html
		




	}

});





