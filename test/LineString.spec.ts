import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test LineString", () => {
    const p1 = new Point([3.0,4.0]);
    const p2 = new Point([2.0,5.0]);
    const points = new LineString([p1,p2]);
    const pointsEmpty = new LineString();

    it("test default constructor", () => {
        expect(pointsEmpty.getNumPoints()).to.equal(0);
        expect(Number.isNaN(pointsEmpty.getPointN(1)));
    });

    it("test constructor with points", () => {
        expect(points.getNumPoints()).to.equal(2);
        expect(points.getPointN(1)).to.equal(p2);

    });

    it("test getType", () => {
        expect(points.getType()).to.equal("LineString");
    });

    it("test isEmpty", () => {
        expect(points.isEmpty()).to.equal(false);
        expect(pointsEmpty.isEmpty()).to.equal(true);
    });

    it("test translate", () => {
        points.translate(1.0,1.0)
        expect(points.getPointN(0)).to.deep.equal(new Point([4.0,5.0]));
        expect(points.getPointN(1)).to.deep.equal(new Point([3.0,6.0]));
    });

    it("test clone", () => {
        const clone = points.clone();
        expect(clone.getPointN(0)).to.deep.equal(points.getPointN(0));
        clone.translate(1.0,1.0);
        expect(clone.getPointN(0)).to.not.deep.equal(points.getPointN(0));
    });
});