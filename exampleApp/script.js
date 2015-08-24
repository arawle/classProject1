
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
		var	divide = '\u00F7';
		var newLcd = '';

			for (var i = 0; i < lcdVal.length; i++){
				if (lcdVal[i] === divide){
					newLcd = newLcd + '/';
				} else if (lcdVal[i] === 'x') {
					newLcd = newLcd + '*';
				} else {
					newLcd = newLcd + lcdVal[i];
				}
			}$('#screen').text(math.eval(newLcd));
	}


});