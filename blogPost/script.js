$(function() {

	// Change cursor when hovering over Click!
	$('.click4Ex').css('cursor','help')

	// Change exampleDiv to display example when Click! is clicked
	$('.click4Ex').on('click', this.id, function () {
		// Get the value of the corresponding key in divEx
		$('#exampleDiv').html(divEx[this.id]);
	})



var divEx = {
	sort: '<pre class="divExam">sort</pre>',
	flatten: '<pre class="divExam">flatten</pre>',
	pickRandom: '<pre class="divExam">pickRandom</pre>',
	forEach: '<pre class="divExam">forEach</pre>',
	filter: '<pre class="divExam">filter</pre>' 
}




});