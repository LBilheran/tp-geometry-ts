import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import Envelope from "../src/Envelope";

describe("test LineString", () => {

    it("test default constructor", () => {
        const pointsEmpty = new LineString();

        expect(pointsEmpty.getNumPoints()).to.equal(0);
        expect(Number.isNaN(pointsEmpty.getPointN(1)));
    });

    it("test constructor with points", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,5.0]);
        const points = new LineString([p1,p2]);

        expect(points.getNumPoints()).to.equal(2);
        expect(points.getPointN(1)).to.equal(p2);

    });

    it("test getType", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,5.0]);
        const points = new LineString([p1,p2]);

        expect(points.getType()).to.equal("LineString");
    });

    it("test isEmpty", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,5.0]);
        const points = new LineString([p1,p2]);
        const pointsEmpty = new LineString();

        expect(points.isEmpty()).to.equal(false);
        expect(pointsEmpty.isEmpty()).to.equal(true);
    });

    it("test translate", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,5.0]);
        const points = new LineString([p1,p2]);
        const pointsEmpty = new LineString();

        points.translate(1.0,1.0)
        expect(points.getPointN(0)).to.deep.equal(new Point([4.0,5.0]));
        expect(points.getPointN(1)).to.deep.equal(new Point([3.0,6.0]));
    });

    it("test clone", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,5.0]);
        const points = new LineString([p1,p2]);
        const pointsEmpty = new LineString();

        const clone = points.clone();
        expect(clone.getPointN(0)).to.deep.equal(points.getPointN(0));
        clone.translate(1.0,1.0);
        expect(clone.getPointN(0)).to.not.deep.equal(points.getPointN(0));
    });

    it("test getEnvelope", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,5.0]);
        const points = new LineString([p1,p2]);
        const pointsEmpty = new LineString();

        expect(points.getEnvelope()).to.deep.equal(new Envelope([2.0,4.0],[3.0,5.0]));
    });
});