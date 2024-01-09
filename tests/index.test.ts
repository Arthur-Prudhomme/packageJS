import {
	calculMoyenne,
	arrayToLowerCase,
	arrayToUpperCase,
} from "../src";

describe("calcul Moyenne", () => {
	it("Les moyennes sont corrects", () => {
		expect(calculMoyenne([1, 2, 3])).toBe(2);
		expect(calculMoyenne([25, 17, 15])).toBe(19);
		expect(calculMoyenne([41, 65, 23, 18, 89, 12, 78])).toBe(47);
	});
});

describe("change les valeurs d'un tableau en minuscules", () => {
	it("Les valeurs du tableau doivent être en minuscules", () => {
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
	it("Les valeurs du tableau doivent être en majuscules", () => {
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
