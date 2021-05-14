import operations from "../assets/operations";

describe("Operaciones", () => {
	test("deberia sumar a y b", () => {
		expect(operations.sumar(5, 5)).toBe(10);
	});

	test("deberia restar a y b", () => {
		expect(operations.restar(3, 2)).toBe(1);
	});

	test("deberia multiplicar a y b", () => {
		expect(operations.multiplicar(3, 3)).toBe(9);
	});

   test("deberia dividir a entre b", () => {
		expect(operations.dividir(3, 3)).toBe(1);
	});
});
