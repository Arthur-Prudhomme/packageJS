import { Robot } from "../src";

const robot = new Robot();

describe("calcul Moyenne", () => {
	it("La somme du tableau [1, 2, 3] doit donner 2", () => {
		expect(robot.calculMoyenne([1, 2, 3])).toBe(2);
	});
});
