import "mocha";
import { expect } from "chai";
import WktWriter from "../src/WktWriter";
import Point from "../src/Point";
import LineString from "../src/LineString";
import GeometryCollection from "../src/GeometryCollection";


describe("test WktWriter", () => {
    it("test write", () => {
        const writer = new WktWriter();
        const pEmpty = new Point();

        expect(writer.write(pEmpty)).to.equal("POINT EMPTY");
    });

    it("test write", () => {
        const writer = new WktWriter();
        const pointsEmpty = new LineString();

        expect(writer.write(pointsEmpty)).to.equal("LINESTRING EMPTY");
    });

    it("test write", () => {
        const writer = new WktWriter();
        const geomsEmpty = new GeometryCollection();

        expect(writer.write(geomsEmpty)).to.equal("GEOMETRYCOLLECTION EMPTY");
    });

    it("test write", () => {
        const writer = new WktWriter();
        const p1 = new Point([3.0,4.0]);

        expect(writer.write(p1)).to.equal("POINT(3 4)");
    });

    it("test write", () => {
        const writer = new WktWriter();
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,5.0]);
        const points = new LineString([p1,p2]);

        expect(writer.write(points)).to.equal("LINESTRING(3 4,2 5)");
    });

    it("test write", () => {
        const writer = new WktWriter();
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,5.0]);
        const points = new LineString([p1,p2]);
        const geoms = new GeometryCollection([p1,points]);

        expect(writer.write(geoms)).to.equal("GEOMETRYCOLLECTION(POINT(3 4),LINESTRING(3 4,2 5))");
    });
});