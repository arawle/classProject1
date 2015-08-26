
$(function() {
		// create a variable and click handler to determine the type
		// of calculator that the user wants
		var calcDo = '';
		$('#calcDo').on('click', 'span', function (){
			calcDo = this.id
			$(this).css('backgroundColor', 'red');
			chooseCalcType(calcDo);
		})

		//determine whether or not the user needs an extra keyboard options
		function chooseCalcType (calcDo) {
			if (calcDo === 'matrix') {
				$('#matrixButtons').css('visibility', 'visible');
			} else if (calcDo === 'stats'){
				alert('stats') 
			} else if (calcDo === 'prob'){
				alert('prob')
			} else {
				alert('hi')
			}
		}

		$('.buttons').on('click', 'span', function(){
			var matrixDo = $(this).attr('id')
			var lcd = $('#screen').html();
			var keyVal = $(this).html();

			if ( $(this).attr('id') === 'calc' ) {
				funcOrNot(lcd);
			} else if (calcDo === 'matrix'){
				matrixIt(lcd, matrixDo);
			} else if ( $(this).attr('id') === 'cancel' ){
				$('#screen').html(null);
				$('#plot').html(null);
			} else if ($(this).attr('id') === '=') {
				funcOrNot(lcd);
			} else if ($(this).attr('id') === 'deleteIt'){
				$('#screen').text(lcd.substring(0, lcd.length - 1))
			} else {
				//displays pushed buttons on screen
				$('#screen').text( lcd + keyVal );
			}
		});	

});





