import "mocha";
import { expect } from "chai";
import LogGeometryVisitor from "../src/LogGeometryVisitor";
import Point from "../src/Point";
import LineString from "../src/LineString";
import GeometryCollection from "../src/GeometryCollection";


describe("test LogGeometryVisitor", () => {
    
    it("test accept Point", () => {
        const pEmpty = new Point();

        let result = "";
        const visitor = new LogGeometryVisitor(function(message){
            result = message;
        });

        pEmpty.accept(visitor);
        expect(result).to.equal("Je suis un point vide.");
    });

    it("test accept Point", () => {
        const p1 = new Point([3.0,4.0]);

        let result = "";
        const visitor = new LogGeometryVisitor(function(message){
            result = message;
        });

        p1.accept(visitor)
        expect(result).to.equal("Je suis un point avec x=3 et y=4.");
    });

    it("test accept LineString", () => {
        const pointsEmpty = new LineString();

        let result = "";
        const visitor = new LogGeometryVisitor(function(message){
            result = message;
        });

        pointsEmpty.accept(visitor)
        expect(result).to.equal("Je suis une polyligne vide.");
    });

    it("test accept LineString", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,5.0]);
        const points = new LineString([p1,p2]);

        let result = "";
        const visitor = new LogGeometryVisitor(function(message){
            result = message;
        });

        points.accept(visitor)
        expect(result).to.equal("Je suis une polyligne définie par 2 point(s).");
    });

    it("test accept GeometryCollection", () => {
        const geomsEmpty = new GeometryCollection();

        let result = "";
        const visitor = new LogGeometryVisitor(function(message){
            result = message;
        });

        geomsEmpty.accept(visitor)
        expect(result).to.equal("Je suis une collection de géométrie vide.");
    });

    it("test accept GeometryCollection", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,5.0]);
        const points = new LineString([p1,p2]);
        const geoms = new GeometryCollection([p1,points]);

        let result = "";
        const visitor = new LogGeometryVisitor(function(message){
            result = message;
        });

        geoms.accept(visitor)
        expect(result).to.equal("Je suis une collection de géométrie définie par 2 géométrie(s).");
    });
});