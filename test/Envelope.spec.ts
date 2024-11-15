import "mocha";
import { expect } from "chai";
import Envelope from "../src/Envelope";

describe("test Envelope", () => {
    
    it("test default constructor", () => {
        const env1 = new Envelope();

        expect(Number.isNaN(env1.getXmin()));
        expect(Number.isNaN(env1.getYmin()));
        expect(Number.isNaN(env1.getXmax()));
        expect(Number.isNaN(env1.getYmax()));
    });

    it("test constructor with coordinates", () => {
        const env2 = new Envelope([1.0,3.0],[4.0,5.0]);

        expect(env2.getXmin()).to.equal(1.0);
        expect(env2.getYmin()).to.equal(3.0);
        expect(env2.getXmax()).to.equal(4.0);
        expect(env2.getYmax()).to.equal(5.0);
    });

    it("test isEmpty", () => {
        const env1 = new Envelope();
        const env2 = new Envelope([1.0,3.0],[4.0,5.0]);

        expect(env1.isEmpty()).to.equal(true);
        expect(env2.isEmpty()).to.equal(false);
    });

    it("test toString", () => {
        const env2 = new Envelope([1.0,3.0],[4.0,5.0]);
        expect(env2.toString()).to.equal("Envelope: (1,3 ; 4,5)");
    });

});