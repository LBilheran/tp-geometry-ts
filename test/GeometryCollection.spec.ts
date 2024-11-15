import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import Envelope from "../src/Envelope";
import GeometryCollection from "../src/GeometryCollection";

describe("test GeometryCollection", () => {
    
    it("test default constructor", () => {
        const geomsEmpty = new GeometryCollection();

        expect(geomsEmpty.getNumGeometries()).to.equal(0);
        expect(Number.isNaN(geomsEmpty.getGeometryN(1)));
    });

    it("test constructor with points", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,5.0]);
        const p3 = new Point([4.0,4.0]);
        const points = new LineString([p1,p2]);
        const geoms = new GeometryCollection([p3,points]);

        expect(geoms.getNumGeometries()).to.equal(2);
        expect(geoms.getGeometryN(1)).to.equal(points);
    });

    it("test getType", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,5.0]);
        const p3 = new Point([4.0,4.0]);
        const points = new LineString([p1,p2]);
        const geoms = new GeometryCollection([p3,points]);

        expect(geoms.getType()).to.equal("GeometryCollection");
    });

    it("test isEmpty", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,5.0]);
        const p3 = new Point([4.0,4.0]);
        const points = new LineString([p1,p2]);
        const geoms = new GeometryCollection([p3,points]);
        const geomsEmpty = new GeometryCollection();

        expect(geoms.isEmpty()).to.equal(false);
        expect(geomsEmpty.isEmpty()).to.equal(true);
    });

    it("test translate", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,5.0]);
        const p3 = new Point([4.0,4.0]);
        const points = new LineString([p1,p2]);
        const geoms = new GeometryCollection([p3,points]);

        geoms.translate(1.0,1.0);
        expect(geoms.getGeometryN(0)).to.deep.equal(new Point([5.0,5.0]));
        expect(geoms.getGeometryN(1)).to.deep.equal(new LineString([new Point([4.0,5.0]),new Point([3.0,6.0])]));
    });

    it("test clone", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,5.0]);
        const p3 = new Point([4.0,4.0]);
        const points = new LineString([p1,p2]);
        const geoms = new GeometryCollection([p3,points]);

        const clone = geoms.clone();
        expect(clone.getGeometryN(0)).to.deep.equal(geoms.getGeometryN(0));
        clone.translate(1.0,1.0);
        expect(clone.getGeometryN(0)).to.not.deep.equal(geoms.getGeometryN(0));
    });

    it("test getEnvelope", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,5.0]);
        const p3 = new Point([4.0,4.0]);
        const points = new LineString([p1,p2]);
        const geoms = new GeometryCollection([p3,points]);

        expect(geoms.getEnvelope()).to.deep.equal(new Envelope([2.0,4.0],[4.0,5.0]));
    });
});