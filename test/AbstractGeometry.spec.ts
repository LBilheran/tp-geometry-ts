import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import GeometryCollection from "../src/GeometryCollection";

describe("test AbstractGeometry", () => {
    const p1 = new Point([3.0,4.0]);
    const p2 = new Point([2.0,5.0]);
    const points = new LineString([p1,p2]);
    const geoms = new GeometryCollection([p1,points]);
    const pEmpty = new Point();
    const pointsEmpty = new LineString();
    const geomsEmpty = new GeometryCollection();

    it("test asText", () => {
        expect(pEmpty.asText()).to.equal("POINT EMPTY");
        expect(pointsEmpty.asText()).to.equal("LINESTRING EMPTY");
        expect(geomsEmpty.asText()).to.equal("GEOMETRYCOLLECTION EMPTY");
        expect(p1.asText()).to.equal("POINT(3 4)");
        expect(points.asText()).to.equal("LINESTRING(3 4,2 5)");
        expect(geoms.asText()).to.equal("GEOMETRYCOLLECTION(POINT(3 4),LINESTRING(3 4,2 5))");
    });
});