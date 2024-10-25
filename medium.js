// 5. Medium - Känn igen en färg
function recognizeColor() {
	const color = prompt("What is your favorite color?");

	switch (color) {
		case "red":
			console.log("Like tomatoes");
			break;
		case "blue":
			console.log("Uranus");
			break;
		case "green":
			console.log("Are you a cow");
			break;
		default:
			console.log("I don't care.");
	}
}

// 6. Medium - Godkänd eller inte
function approvedOrNot() {
	const score = prompt("What is your score?");

	if (score >= 50) {
		console.log("You passed");
	}
}

// 7. Medium - Vad ska vi göra idag?
function whatToDo() {
	const weather = prompt("What is the weather like today? (sunny, rainy, cloudy)");

	switch (weather) {
		case "sunny":
			console.log("Go to the beach!");
			break;
		case "rainy":
			console.log("Go for a walk!");
			break;
		case "cloudy":
			console.log("Play soccer!");
			break;
		default:
			console.log("Stay home.");
	}
}

// 8. Medium - Vilket språk talar du?
function whatLanguage() {
	const language = prompt("What language do you speak? (swedish, english, romanian)");

	switch (language) {
		case "swedish":
			console.log("Hej!");
			break;
		case "english":
			console.log("Hello!");
			break;
		case "romanian":
			console.log("Bună!");
			break;
		default:
			console.log("I don't know your language.");
	}
}

// 9. Medium - Multiple of 5?
function multipleOf5() {
	const number = prompt("What is the number?");

	if (number % 5 === 0) {
		console.log("The number is a multiple of 5.");
	}
}

// 10. Medium - Ska vi gå ut?
function goOut() {
	const answer = confirm("Do you want to go out?");

	if (answer) {
		console.log("Let's go out!");
	} else {
		console.log("Okay, let's stay inside.");
	}
}

//recognizeColor();
//approvedOrNot();
//whatToDo();
//whatLanguage();
//multipleOf5();
//goOut();
