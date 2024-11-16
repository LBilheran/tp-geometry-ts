import "mocha";
import { expect } from "chai";
import LengthVisitor from "../src/LengthVisitor";
import Point from "../src/Point";
import LineString from "../src/LineString";
import GeometryCollection from "../src/GeometryCollection";


describe("test LengthVisitor", () => {
    
    it("test accept", () => {
        const visitor = new LengthVisitor();
        const pEmpty = new Point();

        expect(pEmpty.accept(visitor)).to.equal(0);
    });

    it("test accept", () => {
        const visitor = new LengthVisitor();
        const p1 = new Point([3.0,4.0]);

        expect(p1.accept(visitor)).to.equal(0);
    });

    it("test accept", () => {
        const visitor = new LengthVisitor();
        const pointsEmpty = new LineString();

        expect(pointsEmpty.accept(visitor)).to.equal(0);
    });

    it("test accept", () => {
        const visitor = new LengthVisitor();
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,5.0]);
        const points = new LineString([p1,p2]);

        expect(points.accept(visitor)).to.equal(5);
    });

    it("test accept", () => {
        const visitor = new LengthVisitor();
        const geomsEmpty = new GeometryCollection();

        expect(geomsEmpty.accept(visitor)).to.equal(0);
    });

    it("test accept", () => {
        const visitor = new LengthVisitor();
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,5.0]);
        const points = new LineString([p1,p2]);
        const geoms = new GeometryCollection([p1,points]);

        expect(geoms.accept(visitor)).to.equal(5);
    });
});