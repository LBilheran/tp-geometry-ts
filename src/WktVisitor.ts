import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";
import WktWriter from "./WktWriter";

export default class WktVisitor implements GeometryVisitor {
    private buffer?: string;

    visitPoint(point: Point): void {
        const wkt = new WktWriter();
        this.buffer = wkt.write(point);
    }

    visitLineString(points: LineString): void {
        const wkt = new WktWriter();
        this.buffer = wkt.write(points);
    }

    getResult(): string {
        return this.buffer;
    }
}