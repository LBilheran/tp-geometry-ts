import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import Envelope from "../src/Envelope";

describe("test Point", () => {
    
    it("test default constructor", () => {
        const p1 = new Point();

        expect(p1.getCoordinate()).to.deep.equal([]);
        expect(Number.isNaN(p1.x()));
        expect(Number.isNaN(p1.y()));
    });

    it("test constructor with coordinates", () => {
        const p2 = new Point([3.0,4.0]);

        expect(p2.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p2.x()).to.equal(3.0);
        expect(p2.y()).to.equal(4.0);
    });

    it("test getType", () => {
        const p2 = new Point([3.0,4.0]);

        expect(p2.getType()).to.equal("Point");
    });

    it("test isEmpty", () => {
        const p1 = new Point();
        const p2 = new Point([3.0,4.0]);

        expect(p2.isEmpty()).to.equal(false);
        expect(p1.isEmpty()).to.equal(true);
    });

    it("test translate", () => {
        const p2 = new Point([3.0,4.0]);

        p2.translate(1.0,1.0)
        expect(p2.x()).to.deep.equal(4.0);
        expect(p2.y()).to.deep.equal(5.0);
    });

    it("test clone", () => {
        const p2 = new Point([3.0,4.0]);

        const clone = p2.clone();
        expect(clone.getCoordinate()).to.deep.equal(p2.getCoordinate());
        clone.translate(1.0,1.0);
        expect(clone.getCoordinate()).to.not.deep.equal(p2.getCoordinate());
    });

    it("test getEnvelope", () => {
        const p2 = new Point([3.0,4.0]);
        
        expect(p2.getEnvelope()).to.deep.equal(new Envelope([3.0,4.0],[3.0,4.0]));
    });
});