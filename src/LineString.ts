import Geometry from "./Geometry";
import Point from "./Point";

export default class LineString implements Geometry {
    private listPoint?: Array<Point>;

    constructor(listPoint?: Array<Point>) {
        this.listPoint = listPoint ;
    }

    getType(): string {
        return "LineString";
    }

    getNumPoints() {
        return this.listPoint ? this.listPoint.length : 0;
    }

    getPointN(n?:number) {
        return this.listPoint ? this.listPoint[n] : Number.NaN;
    }
}