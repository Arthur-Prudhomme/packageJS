import { merge, mergeSort } from "../src";

describe("mergeSort", () => {
    // Tri croissant
	it("La fusion de deux tableaux triés doit être correcte", () => {
		expect(merge([1, 2, 3], [4, 5, 6])).toStrictEqual([1, 2, 3, 4, 5, 6]);
		expect(merge([4, 5, 6], [1, 2, 3])).toStrictEqual([1, 2, 3, 4, 5, 6]);
		expect(merge([1, 3, 5], [2, 4, 6])).toStrictEqual([1, 2, 3, 4, 5, 6]);
		expect(merge([1, 4], [3])).toStrictEqual([1, 3, 4]);
		expect(merge([], [])).toStrictEqual([]);
	});
	it("Le tri fusion doit être correct", () => {
		expect(mergeSort([1, 2, 3, 4, 5, 6])).toStrictEqual([1, 2, 3, 4, 5, 6]);
		expect(mergeSort([6, 5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5, 6]);
		expect(mergeSort([3, 2, 1, 6, 5, 4])).toStrictEqual([1, 2, 3, 4, 5, 6]);
		expect(mergeSort([1, 4, 3, 2])).toStrictEqual([1, 2, 3, 4]);
		expect(mergeSort([1])).toStrictEqual([1]);
		expect(mergeSort([])).toStrictEqual([]);
	});
    // Tri décroissant
    it("La fusion de deux tableaux triés doit être correcte avec l'option reversed", () => {
        expect(merge([3, 2, 1], [6, 5, 4], true)).toStrictEqual([6, 5, 4, 3, 2, 1]);
        expect(merge([1], [3], true)).toStrictEqual([3, 1]);
        expect(merge([5, 3, 1], [6, 4, 2], true)).toStrictEqual([6, 5, 4, 3, 2, 1]);
        expect(merge([4, 1], [3], true)).toStrictEqual([4, 3, 1]);
        expect(merge([], [], true)).toStrictEqual([]);
    });
    it("Le tri fusion doit être correct avec l'option reversed", () => {
        expect(mergeSort([1, 2, 3, 4, 5, 6], true)).toStrictEqual([6, 5, 4, 3, 2, 1]);
        expect(mergeSort([6, 5, 4, 3, 2, 1], true)).toStrictEqual([6, 5, 4, 3, 2, 1]);
        expect(mergeSort([3, 2, 1, 6, 5, 4], true)).toStrictEqual([6, 5, 4, 3, 2, 1]);
        expect(mergeSort([1, 4, 3, 2], true)).toStrictEqual([4, 3, 2, 1]);
        expect(mergeSort([1], true)).toStrictEqual([1]);
        expect(mergeSort([], true)).toStrictEqual([]);
    });
});
