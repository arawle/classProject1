
$(function() {

	$('.buttons').on('click', 'span', function(){
		var lcd = $('#screen').html();
		var keyVal = $(this).html();

		if ( $(this).attr('id') === 'calc' ) {
			funcOrNot(lcd);
		} else if ( $(this).attr('id') === 'cancel' ){
			$('#screen').html(null);
		} else if ($(this).attr('id') === '=') {
			funcOrNot(lcd);
		} else if ($(this).attr('id') === 'deleteIt'){
			$('#screen').text(lcd.substring(0, lcd.length - 1))
		} else {
			//displays pushed buttons on screen
			$('#screen').text( lcd + keyVal );
		}
	});	

	// determine if using as calculator or function plotter
	function funcOrNot (func) {
		// define the f(x)= as unicode
		var fx = '\u0192';
		//if the string begins with f then evaluate it as function plotter, else use in calc.
		if (func[0] === fx) {
				useFunction(func);
				$('#screen').text(  '\u0192' + equals(func.substring(1)));
		} else {
			var newOutput = equals(func);
			$('#screen').text(math.eval(newOutput));
		}
	}

	// this is the only function used if using as a calculator
	function equals (lcdVal) {
		// convert the lcdVal into a string which can be evaluated using math.eval
		var newLcd = '';
		// tell what to push to newLcd when the character encountered is unknown
		var	divide = '\u00F7';
		var pi = '\u03A0';
		var degrees = '\u00B0';
		var equalNotTotal = '\u003D';
		// create the newLcd by looping through each input. Special cases for unknown characters like 
		// divide, multiply, pi, degrees
		for (var i = 0; i < lcdVal.length; i++){
			if (lcdVal[i] === divide){
				newLcd = newLcd + '/';
			} else if (lcdVal[i] === pi) {
				newLcd = newLcd + 'pi';
			}else if (lcdVal[i] === degrees) {
				newLcd = newLcd + '(deg)';
			} else {
				newLcd = newLcd + lcdVal[i];
			}
			// return output
		} return (newLcd);
	}

	// This function runs when 'f' is the first character in the lcd
	function useFunction (lcdVal) {
		// get rid of the starting first 5 characters of the lcdVal string 'f(x)='
		var noF = lcdVal.substring(5);
		// get the evaluated string equals() using the noF variable
		var funcDraw = equals(noF);
		//calls on draw() 
		draw(funcDraw);
	} 

	function draw(funcDraw) {
	  try {
	    functionPlot({
	      target: '#plot',
	      yDomain: [-10, 10],
	      xDomain: [-10, 10],
	      data: [{
	        fn: math.eval('f(x) =' + funcDraw)
	      }]
	    });
	  }
	  // if invalid, throw error
	  catch (err) {
	    console.log(err);
	    alert(err);
	  }
	};

});





