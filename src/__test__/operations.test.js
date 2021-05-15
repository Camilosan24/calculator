import operations from "../assets/operations";

describe("Operaciones", () => {
	test("deberia sumar a y b", () => {
		expect(operations(5, 5, "+")).toBe("10");
	});

	test("deberia restar a y b", () => {
		expect(operations(3, 1, "-")).toBe("2");
	});

	test("deberia multiplicar a y b", () => {
		expect(operations(3, 3, "*")).toBe("9");
	});

	test("deberia dividir a entre b", () => {
		expect(operations(3, 3, "/")).toBe("1");
	});
	test("deberia dividir a entre b", () => {
		expect(operations(4, 3, "%")).toBe("1");
	});
});
