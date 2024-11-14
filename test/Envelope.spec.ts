import "mocha";
import { expect } from "chai";
import Envelope from "../src/Envelope";

describe("test Envelope", () => {
    const env1 = new Envelope();
    const env2 = new Envelope([1.0,3.0],[4.0,5.0]);

    it("test default constructor", () => {
        expect(Number.isNaN(env1.getXmin()));
        expect(Number.isNaN(env1.getYmin()));
        expect(Number.isNaN(env1.getXmax()));
        expect(Number.isNaN(env1.getYmax()));
    });

    it("test constructor with coordinates", () => {
        expect(env2.getXmin()).to.equal(1.0);
        expect(env2.getYmin()).to.equal(3.0);
        expect(env2.getXmax()).to.equal(4.0);
        expect(env2.getYmax()).to.equal(5.0);
    });

    it("test isEmpty", () => {
        expect(env1.isEmpty()).to.equal(true);
        expect(env2.isEmpty()).to.equal(false);
    });

    it("test toString", () => {
        expect(env2.toSting()).to.equal("Envelope: (1,3 ; 4,5)");
    });

});