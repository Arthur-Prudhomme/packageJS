/**
 * Calcul de la moyenne d'un tableau de nombre
 * @param {number[]} tableau
 * @returns {number} moyenne
 */
export function calculMoyenne(tableau: number[]) {
	let sum = tableau.reduce((a, b) => a + b, 0);
	return Math.round(sum / tableau.length);
}

/**
 * Met toutes les valeurs d'un tableau de string en minuscules
 * @param {string[]} tableau
 * @returns {string[]} tableau en minuscules
 */
export function arrayToLowerCase(...tableau: string[]) {
	return tableau.reduce(
		(acc: string[], value: string) => [...acc, value.toLowerCase()],
		[]
	);
}

/**
 * Met toutes les valeurs d'un tableau de string en majuscules
 * @param {string[]} tableau
 * @returns {string[]} tableau en majuscules
 */
export function arrayToUpperCase(...tableau: string[]): string[] {
	return tableau.reduce(
		(acc: string[], value: string) => [...acc, value.toUpperCase()],
		[]
	);
}

/**
 * Créer un tableau d'une certaine taille à partir d'un point
 * @param {number} startAt
 * @param {number} size
 * @returns {number[]} tableau
 */
export function range(startAt: number, size: number): number[] {
	return [...Array(size).keys()].map(i => i + startAt)
}

/**
 * Découpe un tableau en chunk d'une certaine taille
 * @param {number[]} tableau
 * @param {number} chunk
 * @returns {number[][]} tableau
 */
export function chunk(tableau: number[], chunk: number): number[][] {
	const compTableau: number[][] = []
	for (let i = 0; i < tableau.length; i += chunk) {
		compTableau.push(tableau.slice(i, i + chunk))
	}
	return compTableau;
}

export function sunder(
	array: number[],
	length: number,
	keepScrap: boolean = false
): number[][] {
	const sundered: number[][] = Array.from({ length }).map(() => []);
	const minFill: number = Math.floor(array.length / length);
	array.forEach((value) => {
		for (let s of sundered) {
			if (s.length === minFill) continue;
			else {
				s.push(value);
				break;
			}
		}
	});
	if (keepScrap && array.length - minFill * length > 0)
		sundered[length - 1].push(...array.slice(minFill * length));
	return sundered;
}
