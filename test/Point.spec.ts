import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.equal(undefined);
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
    });
    it("test getType", () => {
        const p = new Point([3.0,4.0]);
        expect(p.getType()).to.equal("Point");
    });
});

describe("test LineString", () => {
    const p1 = new Point([3.0,4.0]);
    const p2 = new Point([2.0,5.0]);
    const listP = new LineString([p1,p2]);

    it("test default constructor", () => {
        const listPempty = new LineString();
        expect(listPempty.getNumPoints()).to.equal(0);
        expect(Number.isNaN(listPempty.getPointN(1)));
    });
    it("test constructor with coordinates", () => {
        expect(listP.getNumPoints()).to.equal(2);
        expect(listP.getPointN(1)).to.equal(p2);

    });
    it("test getType", () => {
        expect(listP.getType()).to.equal("LineString");
    });
});

