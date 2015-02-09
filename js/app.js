$().ready(function(){
	var userInput;

//********GET FAHRENHEIT TEMP TO CONVERT*********//	

	$("#f_to_c").submit(function(event){
		event.preventDefault();
		userInput = $("#fTempToConvert").val();
		calculateCelsius(userInput);
	});

//********GET CELSIUS TEMP TO CONVERT*********//

	$("#c_to_f").submit(function(event){
		event.preventDefault();
		userInput = $("#cTempToConvert").val();
		calculateFahrenheit(userInput);
	});


//********CONVERTS FROM FAHRENHEIT TO CELSIUS*********//

	function calculateCelsius (userInput){
		var answer = (userInput - 32)*(.5556);
		var roundedAnswer = Math.round(answer);
		$("#convertedfTemp").html(roundedAnswer + "C");
	}

//********CONVERTS FROM CELSIUS TO FAHRENHEIT*********//

	function calculateFahrenheit (userInput){
		var answer = (userInput * 1.8) + 32;
		var roundedAnswer = Math.round(answer);
		$("#convertedcTemp").html(roundedAnswer + "F");
	}

});