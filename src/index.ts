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
 * Fusionne deux tableaux triés et retourne le résultat basé sur l'ordre spécifié.
 * 
 * @param leftArray Le tableau de gauche à fusionner.
 * @param rightArray Le tableau de droite à fusionner.
 * @param reversed Définissez à true pour inverser le résultat de la fusion.
 * @returns Le tableau fusionné.
 */
export function merge(
	leftArray: number[],
	rightArray: number[],
	reversed: boolean = false
): number[] {
	const sortedArray: number[] = [];
	let leftIndex = 0;
	let rightIndex = 0;
	while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
		let minElement: number;
		if (reversed) {
			minElement =
				leftArray[leftIndex] > rightArray[rightIndex]
					? leftArray[leftIndex++]
					: rightArray[rightIndex++];
		} else {
			minElement =
				leftArray[leftIndex] < rightArray[rightIndex]
					? leftArray[leftIndex++]
					: rightArray[rightIndex++];
		}
		sortedArray.push(minElement);
	}
	return sortedArray
		.concat(leftArray.slice(leftIndex))
		.concat(rightArray.slice(rightIndex));
}

/**
 * Lance un tri fusion sur le tableau passé en paramètres
 * @param {number[]} unsortedArray le tableau non trié
 * @returns {number[]} le tableau trié
 */
export function mergeSort(
	unsortedArray: number[],
	reversed: boolean = false
): number[] {
	const { length } = unsortedArray;
	if (length <= 1) return unsortedArray;
	const middleIndex: number = Math.floor(length / 2);
	const leftArray: number[] = unsortedArray.slice(0, middleIndex);
	const rightArray: number[] = unsortedArray.slice(middleIndex);
	return merge(
		mergeSort(leftArray, reversed),
		mergeSort(rightArray, reversed),
		reversed
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
