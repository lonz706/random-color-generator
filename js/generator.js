function generateHexColorCode() {
	return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
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