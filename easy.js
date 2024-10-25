// 1. Easy - Hälsa användaren
function sayHello() {
	const name = prompt("What is your name?");
	console.log(`Hello ${name}`);
}

// 2. Easy - Jämför två ord
function compareWords() {
	const word1 = prompt("What is the first word?");
	const word2 = prompt("What is the second word?");

	const words = [word1, word2].sort();
	console.log(`The first word in alphabetical order is ${words[0]}`);
}

// 3. Easy - Är användaren vuxen?
function ageCheck18() {
	const age = prompt("What is your age?");

	console.log(age >= 18 ? "You are 18+" : "You are not 18+");
}

// 4. Easy - Gissa ett djur
function animalGuess() {
	const animal = prompt("What is the animal?");

	if (animal === "dog") {
		alert("You guessed the animal!");
	}
}

//sayHello();
//compareWords();
//ageCheck18();
//animalGuess();
