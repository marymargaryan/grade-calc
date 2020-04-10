
function myFunction(){
	var input1 = document.getElementById('input1').value;
	var input2 = document.getElementById('input2').value;
	var input3 = document.getElementById('input3').value;
	var input4 = document.getElementById('input4').value;
	var input5 = document.getElementById('input5').value;

	var inputs = [input1, input2, input3, input4, input5];
	for (var i = 0; i <= inputs.length; i++) {
		if (inputs[i] < 0 || inputs[i] > 100) {
			alert('Please enter a correct number');
			throw'';
		}
	}

	var grade1 = input1 * 0.1;
	var grade2 = input2 * 0.15;
	var grade3 = input3 * 0.15;
	var grade4 = input4 * 0.1;
	var grade5 = input5 * 0.5;

	var finalgrade = grade1 + grade2 + grade3 + grade4 + grade5;

	var button = document.getElementById("finalgrade");

	button.innerHTML = finalgrade;
}


