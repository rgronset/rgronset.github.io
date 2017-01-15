function askQuestions() {

	var firstName = prompt('Hva er fornavnet ditt?'),
		lastName = prompt('Hva er etternavnet ditt?'),
		fullName = firstName + ' ' + lastName;

	console.log(fullName);

	var age = prompt('Hvor gammel er du?');
	age = parseInt(age);

	if (age >= 18) {

		console.log('Bruker er en voksen');

	} else if (age >= 13) {

		console.log('Bruker er en ungdom');

	} else {

		console.log('Bruker er et barn');

	}

	if (firstName.toLowerCase() == 'general' && lastName.toLowerCase() != 'assembly') {

		console.log('Hello General');

	} else {

		console.log('What\'s up, Doc!');

		}




}

// Når siden har lastet
$(function() {

	// Når bruker klikker et h3 element
	$('h3').on('click', function() {

	// Skjul neste element
	$(this).next().slideToggle(500);

	});

});