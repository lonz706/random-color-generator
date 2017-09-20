function generateHexColorCode() {
	var letters = '0123456789ABCDEF',
		color   = '#';

	for(var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}

	return color;
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