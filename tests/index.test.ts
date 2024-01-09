import {
	calculMoyenne,
	arrayToLowerCase,
	arrayToUpperCase,
	range,
	chunk,
	sunder
} from "../src";

describe("calcul Moyenne", () => {
	it("Les moyennes sont corrects", () => {
		expect(calculMoyenne([1, 2, 3])).toBe(2);
		expect(calculMoyenne([25, 17, 15])).toBe(19);
		expect(calculMoyenne([41, 65, 23, 18, 89, 12, 78])).toBe(47);
	});
});

describe("change les valeurs d'un tableau en minuscules", () => {
	it("Les valeurs du tableau sont en minuscules", () => {
		expect(
			arrayToLowerCase(
				"pourquoi un corbeau ressemble à un bureau ?",
				"Tout Le Monde Est Fou Ici",
				"SI TU NE SAIS PAS OÙ TU VAS N'IMPORTE QUELLE ROUTE PEUT T'Y MENER"
			)
		).toStrictEqual([
			"pourquoi un corbeau ressemble à un bureau ?",
			"tout le monde est fou ici",
			"si tu ne sais pas où tu vas n'importe quelle route peut t'y mener",
		]);
	});
});

describe("change les valeurs d'un tableau en majuscules", () => {
	it("Les valeurs du tableau sont en majuscules", () => {
		expect(
			arrayToUpperCase(
				"pourquoi un corbeau ressemble à un bureau ?",
				"Tout Le Monde Est Fou Ici",
				"SI TU NE SAIS PAS OÙ TU VAS N'IMPORTE QUELLE ROUTE PEUT T'Y MENER"
			)
		).toStrictEqual([
			"POURQUOI UN CORBEAU RESSEMBLE À UN BUREAU ?",
			"TOUT LE MONDE EST FOU ICI",
			"SI TU NE SAIS PAS OÙ TU VAS N'IMPORTE QUELLE ROUTE PEUT T'Y MENER",
		]);
	});
});

describe("création d'un tableau d'une certaine taille à partir d'un point", () => {
	it("Le tableau est bien construit", () => {
		expect(range(23, 5)).toStrictEqual([23, 24, 25, 26, 27]);
		expect(range(11, 3)).toStrictEqual([11, 12, 13]);
		expect(range(99, 12)).toStrictEqual([99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110]);
	});
});

describe("création d'un tableau d'une certaine taille à partir d'un point", () => {
	it("Le tableau est bien construit", () => {
		expect(chunk([1, 2, 3, 4], 2)).toStrictEqual([[1, 2], [3, 4]]);
		expect(chunk([1, 2, 3, 4, 5], 2)).toStrictEqual([[1, 2], [3, 4], [5]]);
		expect(chunk([1, 2, 3, 4, 5], 1)).toStrictEqual([[1], [2], [3], [4], [5]]);
	});
});
describe("Vérification de la fonction sunder", () => {
	it("[1, 2, 3, 4] par 2 => [[1, 2], [3, 4]]", () => {
		expect(sunder([1, 2, 3, 4], 2)).toStrictEqual([
			[1, 2],
			[3, 4],
		]);
	});
	it("[1, 2, 3, 4, 5] par 2 => [[1, 2], [3, 4]]", () => {
		expect(sunder([1, 2, 3, 4, 5], 2)).toStrictEqual([
			[1, 2],
			[3, 4],
		]);
	});
	it("[1, 2, 3, 4, 5] par 3 => [[1], [2], [3]]", () => {
		expect(sunder([1, 2, 3, 4, 5], 3)).toStrictEqual([[1], [2], [3]]);
	});
});

describe("Vérification de la fonction sunder avec reste", () => {
	it("[1, 2, 3, 4] par 2 => [[1, 2], [3, 4]]", () => {
		expect(sunder([1, 2, 3, 4], 2, true)).toStrictEqual([
			[1, 2],
			[3, 4],
		]);
	});
	it("[1, 2, 3, 4, 5] par 2 => [[1, 2], [3, 4, 5]]", () => {
		expect(sunder([1, 2, 3, 4, 5], 2, true)).toStrictEqual([
			[1, 2],
			[3, 4, 5],
		]);
	});
	it("[1, 2, 3, 4, 5] par 3 => [[1], [2], [3, 4, 5]]", () => {
		expect(sunder([1, 2, 3, 4, 5], 3, true)).toStrictEqual([
			[1],
			[2],
			[3, 4, 5],
		]);
	});
});
