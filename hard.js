// 11. Hard - Siffra eller bokstav?
function digitOrLetter() {
	const answer = prompt("Input a digit or letter.");

	if (answer.length !== 1) {
		console.log("It's neither a digit nor a letter.");
		return;
	}

	// take in account most special characters, åäö etc instead of a regex.
	if (answer.toLowerCase() !== answer.toUpperCase()) {
		console.log("It's a letter!");
	} else if (answer.match(/^[0-9]+$/)) {
		console.log("It's a digit.");
	} else {
		console.log("It's neither a number nor a letter.");
	}
}

// 12. Hard - Största av tre ord
function biggestOfThree() {
	const word1 = prompt("What is the first word?");
	const word2 = prompt("What is the second word?");
	const word3 = prompt("What is the third word?");

	const words = [word1, word2, word3].sort((a, b) => b.length - a.length);

	console.log(`The biggest word is ${words[0]}`);
}

// 13. Hard - Lösenordskontroll
function passwordCheck() {
	const password = prompt("What is the password?");

	if (password.length < 8) {
		console.log("The password is too short.");
		return;
	}

	if (!password.match(/\d/)) {
		console.log("The password must contain a number.");
		return;
	}

	console.log("Valid password!");
}

// 14. Hard - Ålderskategori
function ageCategory() {
	let age = prompt("What is your age?");

	if (isNaN(age)) {
		console.log("Please enter a number.");
		return;
	}

	age = parseInt(age);

	if (age >= 0 && age <= 12) {
		console.log("You are a child.");
	} else if (age >= 13 && age <= 19) {
		console.log("You are a teenager.");
	} else if (age >= 20 && age <= 64) {
		console.log("You are an adult.");
	} else {
		console.log("You are a senior citizen. (or less than 0 years old, weird)");
	}
}

// 15. Hard - Beslutstagande
function decision() {
	const answer = confirm("Do you want to go out?");
	const answer2 = confirm("Are you hungry?");

	if (answer && answer2) {
		console.log("Let's go out and eat at a restaurant!");
	} else if (answer) {
		console.log("Let's just take a walk!");
	} else if (answer2) {
		console.log("Let's just eat some food at home!");
	} else {
		console.log("Let's stay inside.");
	}
}

//digitOrLetter();
//biggestOfThree();
//passwordCheck();
//ageCategory();
//decision();
