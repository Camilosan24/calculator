const handleOperations = (a, b, operation) => {
	switch (operation) {
		case "+":
			return JSON.stringify(JSON.parse(a) + JSON.parse(b));
		case "-":
			return JSON.stringify(JSON.parse(a) - JSON.parse(b));
		case "*":
			return JSON.stringify(JSON.parse(a) * JSON.parse(b));
		case "/":
			return JSON.stringify(JSON.parse(a) / JSON.parse(b));
		case "%":
			return JSON.stringify(JSON.parse(a) % JSON.parse(b));

		default:
			return a;
	}
};

export default handleOperations;
