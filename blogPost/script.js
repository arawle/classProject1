$(function() {

	// Change cursor when hovering over Click!
	$('.click4Ex').css('cursor','help')

	// Change exampleDiv to display example when Click! is clicked
	$('.click4Ex').on('click', this.id, function () {
		// Get the value of the corresponding key in divEx
		$('#exampleDiv').html(divEx[this.id]);
	})
	//examples for divEx
	var divEx = {
		sort: '<pre class="divExam">math.sort([5, 10, 1]);<br/><span class="redIt">// returns [1, 5, 10]</span><br/><br/>math.sort(["B", "A", 1]);<br/><span class="redIt">// returns [1, "A", "B"]</span><br/><br/>function sortByLength (a, b){<br/>  return a.length-b.length;<br/>}<br/>math.sort(["rabbit", "cat", "horse"], sortByLength);<br/><span class="redIt">// returns ["cat", "horse", "rabbit"]</span></pre>',
		flatten: '<pre class="divExam">math.flatten([[1, 2], [3, 4]]);<br/><br/><span class="redIt">// returns [1, 2, 3, 4]</span></pre>',
		pickRandom: '<pre class="divExam">math.pickRandom([3, 6, "hi", 2, 1]);<br/><br/><span class="redIt">// returns 2</span></pre>',
		forEach: '<pre class="divExam">math.forEach([1, 2, 3], function(value){<br/>  console.log(value*3);<br/>});<br/><br/><span class="redIt">// outputs 3, 6, 9</span></pre>',
		filter: '<pre class="divExam">math.filter(["21", "cat", "+", function(x){return x}]);<br/><br/><span class="redIt">// returns ["21"]</span><br/><br/>function isNegative(x){<br/>  return x<0;<br/>}<br/>math.filter([6, -2, -1, 4], isNegative);<br/><span class="redIt">// returns [-2, -1]</span></pre>'
	}

});


