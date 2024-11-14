import "mocha";
import { expect } from "chai";
import Envelope from "../src/Envelope";
import EnvelopeBuilder from "../src/EnvelopeBuilder";

describe("test EnvelopeBuilder", () => {
    const envB = new EnvelopeBuilder();

    it("test build", () => {
        envB.insert([1.0,2.0]);
        expect(envB.build()).to.deep.equal(new Envelope([1.0,2.0],[1.0,2.0]));
        envB.insert([5.0,6.0]);
        expect(envB.build()).to.deep.equal(new Envelope([1.0,2.0],[5.0,6.0]));
        envB.insert([0.0,3.0]);
        expect(envB.build()).to.deep.equal(new Envelope([0.0,2.0],[5.0,6.0]));
        envB.insert([0.0,1.0]);
        expect(envB.build()).to.deep.equal(new Envelope([0.0,1.0],[5.0,6.0]));
    });
});