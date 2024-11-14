import "mocha";
import { expect } from "chai";
import WktWriter from "../src/WktWriter";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test WktWriter", () => {
    it("test write", () => {
        const writer = new WktWriter();
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,5.0]);
        const points = new LineString([p1,p2]);
        const pEmpty = new Point();
        const pointsEmpty = new LineString();

        expect(writer.write(pEmpty)).to.equal("POINT EMPTY");
        expect(writer.write(pointsEmpty)).to.equal("LINESTRING EMPTY");
        expect(writer.write(p1)).to.equal("POINT(3 4)");
        expect(writer.write(points)).to.equal("LINESTRING(3 4,2 5)");
    });
});