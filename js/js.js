window.onload = function() {
	let str = "Hello Kristyn. Welcome to my website!";
	printLine(str);

	
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function printLine(toDisplay = "Test") {
	let display = document.getElementById("display");
		
	for(let i = 0; i < toDisplay.length; i++ ) {
		await sleep(75);
			display.innerHTML += toDisplay.charAt(i);
	}
	display.innerHTML += "</br>";
	await sleep(1000);
}