import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import GeometryWithCachedEnvelope from "../src/GeometryWithCachedEnvelope";
import Geometry from "../src/Geometry";
import WktVisitor from "../src/WktVisitor";

describe("test GeometryWithCachedEnvelope", () => {
    let g: Geometry = new Point([3.0,4.0]);
    const p = new Point([3.0,4.0]);
    const visitor = new WktVisitor();
    g = new GeometryWithCachedEnvelope(g);

    it("test constructor with geometry", () => {
        expect(g.getType()).to.equal(p.getType());
        expect(g.isEmpty()).to.equal(p.isEmpty());
        expect(g.clone()).to.deep.equal(p.clone());
        expect(g.accept(visitor)).to.deep.equal(p.accept(visitor));
    });

    it("test getEnvelope", () => {
        const a = g.getEnvelope();
        const b = g.getEnvelope();
        expect(a).to.equal(b);
    });

    it("test translate", () => {
        const c = g.getEnvelope();
        g.translate(1.0,1.0);
        const d = g.getEnvelope();
        expect(d).to.not.deep.equal(c);
    });

});