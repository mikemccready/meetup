var passwordField = document.getElementById('password');


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
		console.log('ready')
	}







	// if(password.length >= 8 && password.length <= 20){
	// 	document.getElementById('character-length').style.display = 'none';
	// }else {
	// 	document.getElementById('character-length').style.display = 'block';
	// }

	// if(password.match(/\d/g)){
	// 	document.getElementById('password-number').style.display = 'none';
	// }else {
	// 	document.getElementById('password-number').style.display = 'block';
	// }
};

passwordField.addEventListener('keyup', validatePassword)
