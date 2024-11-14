import Coordinate from "./Coordinate";

export default class Envelope {
    private bottomLeft?: Coordinate;
    private topRight?: Coordinate;

    constructor(bottomLeft?: Coordinate, topRight?: Coordinate) {
        this.bottomLeft = bottomLeft ? bottomLeft : [] ;
        this.topRight = topRight ? topRight : [] ;
    }

    isEmpty(): boolean {
        return (this.bottomLeft.length===0)&&(this.topRight.length===0) ? true : false;
    }

    toSting(): string {
        return "Envelope: (" + this.bottomLeft + " ; " + this.topRight + ")" ;
    }

    getXmin(): number {
        return this.bottomLeft[0];
    }

    getYmin(): number {
        return this.bottomLeft[1];
    }

    getXmax(): number {
        return this.topRight[0];
    }

    getYmax(): number {
        return this.topRight[1];
    }
}