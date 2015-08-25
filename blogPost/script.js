$(function() {

	// Change cursor when hovering over Click!
	$('.click4Ex').css('cursor','help')

	// Change exampleDiv to display example when Click! is clicked
	$('.click4Ex').on('click', this.id, function () {
		// Get the value of the corresponding key in imgEx
		$('#exampleDiv').html(imgEx[this.id]);
	})



var imgEx = {
	sort: 'hi',
	flatten: 'flat'
	// pickRandom: ,
	// forEach: ,
	// filter: 
}




});