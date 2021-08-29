const advice = [
	'If you’re good at something, never do it for free.',
	'Do, or do not. There is no try.',
	'It’s what you do right now that makes a difference.',
	"Until you start believing in yourself, you ain't gonna have a life!",
	'Life does not stop and start at your convenience.',
	"You know what the trouble about real life is? There's no danger music.",
	'You have one life, live it',
	'No pain, No gain',
];

// generate random light colors:
// adviceEye.style.backgroundColor = randomcolor({luminosity: 'light'})

const genNew = document.getElementById('genNew');
const adviceDisplay = document.getElementById('adviceDisplay');
const eyeBG = document.getElementById('adviceEye');

function getRandomQuote(min, max) {
	let step1 = max - min + 1;
	let step2 = Math.random() * step1;
	let result = Math.floor(step2) + min;
	return result;
}
getRandomQuote();

genNew.addEventListener('click', function () {
	function getNewColor() {
		let letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}

		eyeBG.style.background = color;
	}
	getNewColor();

	function getRandomQuote() {
		adviceDisplay.innerHTML = advice[Math.floor(Math.random() * advice.length)];
	}
	getRandomQuote();
});
