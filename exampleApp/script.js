$(function() {

	$('.buttons').on('click', 'span', function(){
		console.log(   );

		var lcd = $('#screen').html();
		var keyVal = $(this).html();
		var	divide = '\u00F7'

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
		if (keyVal === divide) {

		} else if (keyVal === 'x') {

		} else {
			$('#screen').text(eval(lcdVal));
		}
	}


});