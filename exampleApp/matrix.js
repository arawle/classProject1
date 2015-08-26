

	function matrixIt (lcd) {
		var toArr = lcd.split(' ');
		
		//determine which method to use
		// if () {
		// 	$('#screen').text(matrixVar.determinant);
		// } else if () {
		// 	$('#screen').text(matrixVar.dotProduct);
		// } else if () {
		// 	$('#screen').text(matrixVar.crossProduct);
		// } else {
		// 	$('#screen').text(matrixVar.trace);
		// }

	}

	var matrixVar = {

		determinant: function (toArr) {
									return math.det(math.eval(toArr));
								 },

		dotProduct: function (lcd) {
									return math.eval(lcd);
								},

		crossProduct: function (toArr) {
										return math.crossProduct(math.eval(toArr));
									},

		trace: function (toArr) {
							return math.trace(math.eval(toArr));
					 }

	}





	// function matrixIt (lcd) {
	// 	var toArr = lcd.split(' ');

	// 	$('#screen').text(matrixVar.determinant);
	// }
