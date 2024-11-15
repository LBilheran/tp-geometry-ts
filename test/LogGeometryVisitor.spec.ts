import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import LogGeometryVisitor from "../src/LogGeometryVisitor";
import GeometryCollection from "../src/GeometryCollection";

describe("test LogGeometryVisitor", () => {
    const visitor = new LogGeometryVisitor();
    const p1 = new Point([3.0,4.0]);
    const p2 = new Point([2.0,5.0]);
    const points = new LineString([p1,p2]);
    const geoms = new GeometryCollection([p1,points]);
    const pEmpty = new Point();
    const pointsEmpty = new LineString();
    const geomsEmpty = new GeometryCollection();

    it("test accept", () => {
        expect(pEmpty.accept(visitor)).to.equal(console.log("Je suis un point vide."));
        expect(p1.accept(visitor)).to.equal(console.log("Je suis un point avec x=3 et y=4."));
        expect(pointsEmpty.accept(visitor)).to.equal(console.log("Je suis une polyligne vide."));
        expect(points.accept(visitor)).to.equal(console.log("Je suis une polyligne définie par 2 point(s)."));
        expect(geomsEmpty.accept(visitor)).to.equal(console.log("Je suis une collection de géométrie vide."));
        expect(geoms.accept(visitor)).to.equal(console.log("Je suis une collection de géométrie définie par 2 géométrie(s)."));
    });

});