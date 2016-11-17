	var result = $('#result'),
	    button = $('.btn');

	$(button).click(function() {
		var buttonVal = $(this).val(),
	 		value = result.val();
	 		
	  	value += buttonVal;
	  	result.val(value);	  
	});
	$('#eval').click(function() {
		var sum = result.val();
		
		result.val('');
		result.val(eval(sum));
	});
	$('#clear').click(function() {
		result.val('');
	});