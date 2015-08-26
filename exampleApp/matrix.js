
	function matrixIt (lcd) {
		var toArr = lcd.split(' ')
		
		return $('#screen').text(math.det(math.eval(toArr)));
		
	}

	var matrixVar = {

		determinant: function () {
			return $('#screen').text(math.det(math.eval(toArr)));
		},

		dotProduct: function (lcd) {
									math.dot($('#screen').html());
								},

		crossProduct: function (lcdVal) {
										alert('cross')
									},

		trace: function (lcdVal) {
							alert('trace')
					 }

	}
