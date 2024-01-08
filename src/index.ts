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
export function arrayToLowerCase(tableau: string[]) {
	const convertTableau: string[] = [];
	tableau.forEach(element => {
		convertTableau.push(element.toLowerCase());
	});
	return convertTableau;
}

/**
	 * Met toutes les valeurs d'un tableau de string en majuscules
	 * @param {string[]} tableau
	 * @returns {string[]} tableau en majuscules
	 */
export function arrayToUpperCase(tableau: string[]): string[] {
	const convertTableau: string[] = [];
	tableau.forEach(element => {
		convertTableau.push(element.toUpperCase());
	});
	return convertTableau;
}