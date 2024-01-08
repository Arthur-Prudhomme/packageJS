"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const robot = new src_1.Robot();
describe("calcul Moyenne", () => {
    it("La somme du tableau [1, 2, 3] doit donner 2", () => {
        expect(robot.calculMoyenne([1, 2, 3])).toBe(2);
    });
});
//# sourceMappingURL=index.test.js.map