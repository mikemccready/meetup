var passwordField = document.getElementById('password');
var confirmPasswordField = document.getElementById('confirm-password');
var validPassword = false;
var submitBtn = document.getElementById('submit');

var validatePassword = function() {
	var password = passwordField.value;
	var passingReq = [];
	var requirements = [
		{
			req: password.length >= 8 && password.length <= 20,
			prompt: 'character-length',
			passing: false
		},
		{
			req: password.match(/\d/g),
			prompt: 'password-number',
			passing: false			
		}
	];	

	for (var i = 0; i < requirements.length; i++) {
		if(requirements[i].req) {
			document.getElementById(requirements[i].prompt).style.display = 'none';
			requirements[i].passing = true;
		}else {
			document.getElementById(requirements[i].prompt).style.display = 'block';
			requirements[i].passing = false;
		}
	}

	// filter requirements list for passing requirements
	passingReq = requirements.filter(function(passingReq) {
    	return passingReq.passing === true;
	});	

	if(passingReq.length === requirements.length) {
		confirmPasswordField.disabled = false;
		validPassword = true;
		return validPassword;
	}else {
		confirmPasswordField.disabled = true;
		validPassword = true;
		return validPassword;
	}
};

var confirmPassword = function() {
	if(confirmPasswordField.value === passwordField.value) {
		document.getElementById('confirm-match').style.display = 'none';
		submitBtn.disabled = false;
	}else {
		document.getElementById('confirm-match').style.display = 'block';
		submitBtn.disabled = true;
	}
}

passwordField.addEventListener('keyup', validatePassword)
confirmPasswordField.addEventListener('keyup', confirmPassword)
