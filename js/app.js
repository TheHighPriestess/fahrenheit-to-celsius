$().ready(function(){
	var userInput;

	$("#myform").submit(function(event){
		event.preventDefault();
		userInput = $("#tempToConvert").val();
		calculateCelsius(userInput);
	});

//********CONVERTS FROM FAHRENHEIT TO CELSIUS*********//

	function calculateCelsius (userInput){
		var answer = (userInput - 32)*(.5556);
		var roundedAnswer = Math.round(answer);
		$("#convertedTemp").html(roundedAnswer + "C");
	}

});