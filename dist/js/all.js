//app.js
var passwordField = document.getElementById('password');
var confirmPasswordField = document.getElementById('confirm-password');
var validPassword = false;
var showReqs = false;
var submitBtn = document.getElementById('submit');

var validatePassword = function () {
	var password = passwordField.value;
	var passingReq = [];
	var requirements = [{
		req: password.length >= 8 && password.length <= 20,
		prompt: 'character-length',
		passing: false
	}, {
		req: password.match(/\d/g),
		prompt: 'password-number',
		passing: false
	}];

	for (var i = 0; i < requirements.length; i++) {
		if (requirements[i].req) {
			document.getElementById(requirements[i].prompt).style.display = 'none';
			requirements[i].passing = true;
		} else {
			document.getElementById(requirements[i].prompt).style.display = 'block';
			requirements[i].passing = false;
		}
	}

	// filter requirements list for passing requirements
	passingReq = requirements.filter(function (passingReq) {
		return passingReq.passing === true;
	});

	if (passingReq.length === requirements.length) {
		confirmPasswordField.disabled = false;
		validPassword = true;
		return validPassword;
	} else {
		confirmPasswordField.disabled = true;
		validPassword = true;
		return validPassword;
	}
};

var confirmPassword = function () {
	if (confirmPasswordField.value === passwordField.value) {
		document.getElementById('confirm-match').style.display = 'none';
		submitBtn.disabled = false;
	} else {
		document.getElementById('confirm-match').style.display = 'block';
		submitBtn.disabled = true;
	}
};

passwordField.addEventListener('keyup', validatePassword);
confirmPasswordField.addEventListener('keyup', confirmPassword);
passwordField.addEventListener('focus', function () {
	if (showReqs === false) {
		document.getElementById('character-length').style.display = 'block';
		document.getElementById('password-number').style.display = 'block';
	}
	showReqs = true;
	return showReqs;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInNpZ251cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9hcHAuanMiLCJ2YXIgcGFzc3dvcmRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpO1xudmFyIGNvbmZpcm1QYXNzd29yZEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm0tcGFzc3dvcmQnKTtcbnZhciB2YWxpZFBhc3N3b3JkID0gZmFsc2U7XG52YXIgc2hvd1JlcXMgPSBmYWxzZTtcbnZhciBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0Jyk7XG5cbnZhciB2YWxpZGF0ZVBhc3N3b3JkID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcGFzc3dvcmQgPSBwYXNzd29yZEZpZWxkLnZhbHVlO1xuXHR2YXIgcGFzc2luZ1JlcSA9IFtdO1xuXHR2YXIgcmVxdWlyZW1lbnRzID0gW3tcblx0XHRyZXE6IHBhc3N3b3JkLmxlbmd0aCA+PSA4ICYmIHBhc3N3b3JkLmxlbmd0aCA8PSAyMCxcblx0XHRwcm9tcHQ6ICdjaGFyYWN0ZXItbGVuZ3RoJyxcblx0XHRwYXNzaW5nOiBmYWxzZVxuXHR9LCB7XG5cdFx0cmVxOiBwYXNzd29yZC5tYXRjaCgvXFxkL2cpLFxuXHRcdHByb21wdDogJ3Bhc3N3b3JkLW51bWJlcicsXG5cdFx0cGFzc2luZzogZmFsc2Vcblx0fV07XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZXF1aXJlbWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAocmVxdWlyZW1lbnRzW2ldLnJlcSkge1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmVxdWlyZW1lbnRzW2ldLnByb21wdCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdHJlcXVpcmVtZW50c1tpXS5wYXNzaW5nID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmVxdWlyZW1lbnRzW2ldLnByb21wdCkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRyZXF1aXJlbWVudHNbaV0ucGFzc2luZyA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdC8vIGZpbHRlciByZXF1aXJlbWVudHMgbGlzdCBmb3IgcGFzc2luZyByZXF1aXJlbWVudHNcblx0cGFzc2luZ1JlcSA9IHJlcXVpcmVtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBhc3NpbmdSZXEpIHtcblx0XHRyZXR1cm4gcGFzc2luZ1JlcS5wYXNzaW5nID09PSB0cnVlO1xuXHR9KTtcblxuXHRpZiAocGFzc2luZ1JlcS5sZW5ndGggPT09IHJlcXVpcmVtZW50cy5sZW5ndGgpIHtcblx0XHRjb25maXJtUGFzc3dvcmRGaWVsZC5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdHZhbGlkUGFzc3dvcmQgPSB0cnVlO1xuXHRcdHJldHVybiB2YWxpZFBhc3N3b3JkO1xuXHR9IGVsc2Uge1xuXHRcdGNvbmZpcm1QYXNzd29yZEZpZWxkLmRpc2FibGVkID0gdHJ1ZTtcblx0XHR2YWxpZFBhc3N3b3JkID0gdHJ1ZTtcblx0XHRyZXR1cm4gdmFsaWRQYXNzd29yZDtcblx0fVxufTtcblxudmFyIGNvbmZpcm1QYXNzd29yZCA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKGNvbmZpcm1QYXNzd29yZEZpZWxkLnZhbHVlID09PSBwYXNzd29yZEZpZWxkLnZhbHVlKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm0tbWF0Y2gnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdHN1Ym1pdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuXHR9IGVsc2Uge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtLW1hdGNoJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0c3VibWl0QnRuLmRpc2FibGVkID0gdHJ1ZTtcblx0fVxufTtcblxucGFzc3dvcmRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHZhbGlkYXRlUGFzc3dvcmQpO1xuY29uZmlybVBhc3N3b3JkRmllbGQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBjb25maXJtUGFzc3dvcmQpO1xucGFzc3dvcmRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcblx0aWYgKHNob3dSZXFzID09PSBmYWxzZSkge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFyYWN0ZXItbGVuZ3RoJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkLW51bWJlcicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHR9XG5cdHNob3dSZXFzID0gdHJ1ZTtcblx0cmV0dXJuIHNob3dSZXFzO1xufSk7Il19
