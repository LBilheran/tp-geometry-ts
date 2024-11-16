import "mocha";
import { expect } from "chai";
import WktVisitor from "../src/WktVisitor";
import Point from "../src/Point";
import LineString from "../src/LineString";
import GeometryCollection from "../src/GeometryCollection";


describe("test WktVisitor", () => {
    
    it("test accept", () => {
        const visitor = new WktVisitor();
        const pEmpty = new Point();

        pEmpty.accept(visitor)
        expect(visitor.getResult()).to.equal("POINT EMPTY");
    });

    it("test accept", () => {
        const visitor = new WktVisitor();
        const p1 = new Point([3.0,4.0]);

        p1.accept(visitor)
        expect(visitor.getResult()).to.equal("POINT(3 4)");
    });

    it("test accept", () => {
        const visitor = new WktVisitor();
        const pointsEmpty = new LineString();

        pointsEmpty.accept(visitor)
        expect(visitor.getResult()).to.equal("LINESTRING EMPTY");
    });

    it("test accept", () => {
        const visitor = new WktVisitor();
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,5.0]);
        const points = new LineString([p1,p2]);

        points.accept(visitor)
        expect(visitor.getResult()).to.equal("LINESTRING(3 4,2 5)");
    });

    it("test accept", () => {
        const visitor = new WktVisitor();
        const geomsEmpty = new GeometryCollection();

        geomsEmpty.accept(visitor)
        expect(visitor.getResult()).to.equal("GEOMETRYCOLLECTION EMPTY");
    });

    it("test accept", () => {
        const visitor = new WktVisitor();
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,5.0]);
        const points = new LineString([p1,p2]);
        const geoms = new GeometryCollection([p1,points]);

        geoms.accept(visitor)
        expect(visitor.getResult()).to.equal("GEOMETRYCOLLECTION(POINT(3 4),LINESTRING(3 4,2 5))");
    });
});