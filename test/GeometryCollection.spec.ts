import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import Envelope from "../src/Envelope";
import GeometryCollection from "../src/GeometryCollection";

describe("test GeometryCollection", () => {
    const p1 = new Point([3.0,4.0]);
    const p2 = new Point([2.0,5.0]);
    const points = new LineString([p1,p2]);
    const pointsEmpty = new LineString();
    const geoms = new GeometryCollection([p1,points]);
    const geomsEmpty = new GeometryCollection();

    it("test default constructor", () => {
        expect(geomsEmpty.getNumGeometries()).to.equal(0);
        expect(Number.isNaN(geomsEmpty.getGeometryN(1)));
    });

    it("test constructor with points", () => {
        expect(geoms.getNumGeometries()).to.equal(2);
        expect(geoms.getGeometryN(1)).to.equal(points);

    });

    it("test getType", () => {
        expect(geoms.getType()).to.equal("GeometryCollection");
    });

    it("test isEmpty", () => {
        expect(geoms.isEmpty()).to.equal(false);
        expect(geomsEmpty.isEmpty()).to.equal(true);
    });

    it("test translate", () => {
        points.translate(1.0,1.0)
        expect(geoms.getGeometryN(0)).to.deep.equal(new Point([4.0,5.0]));
        expect(geoms.getGeometryN(1)).to.deep.equal(new LineString([new Point([4.0,5.0]),new Point([3.0,6.0])]));
    });

    it("test clone", () => {
        const clone = geoms.clone();
        expect(clone.getGeometryN(0)).to.deep.equal(geoms.getGeometryN(0));
        clone.translate(1.0,1.0);
        expect(clone.getGeometryN(0)).to.not.deep.equal(geoms.getGeometryN(0));
    });

    it("test getEnvelope", () => {
        expect(geoms.getEnvelope()).to.deep.equal(new Envelope([3.0,5.0],[4.0,6.0]));
    });
});