function generateHexColorCode() {
	return '#'+Math.floor(Math.random()*16777215).toString(16);
}

for(columnId = 1; columnId <= 5; columnId++) {

	const generatedColorCode = generateHexColorCode()

	document.getElementById('color-' + columnId).style.backgroundColor = generatedColorCode;

	var colorCodeParagraph = document.createElement('p'),
		colorCodeNode      = document.createTextNode(generatedColorCode);

	colorCodeParagraph.className = 'color-code';
	colorCodeParagraph.appendChild(colorCodeNode);

	document.getElementById('color-' + columnId).appendChild(colorCodeParagraph);

}