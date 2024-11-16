import GeometryCollection from "./GeometryCollection";
import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class WktVisitor implements GeometryVisitor<void> {
    private buffer?: string;

    visitPoint(point: Point): void {
        if (point.isEmpty()) {
            this.buffer = "POINT EMPTY";
        } else {
            this.buffer = "POINT(" + point.x() + " " + point.y() +")";
        }
    }

    visitLineString(points: LineString): void {
        if (points.isEmpty()) {
            this.buffer = "LINESTRING EMPTY"
        } else {
            let wktlinestring = "LINESTRING(";
            for (let index = 0; index < points.getNumPoints(); index++) {
                wktlinestring += points.getPointN(index).x();
                wktlinestring += " ";
                wktlinestring += points.getPointN(index).y();
                wktlinestring += ",";
            }
            this.buffer = wktlinestring.slice(0,-1) + ")";
        };
    }

    visitGeometryCollection(geoms: GeometryCollection): void {
        if (geoms.isEmpty()) {
            this.buffer = ("GEOMETRYCOLLECTION EMPTY");
        } else {
            let wktgeometrycollection = "GEOMETRYCOLLECTION(";
            for (let index = 0; index < geoms.getNumGeometries(); index++) {
                geoms.getGeometryN(index).accept(this)
                wktgeometrycollection += this.buffer;
                wktgeometrycollection += ",";
            }
            this.buffer = wktgeometrycollection.slice(0,-1) + ")";
        }
    }

    getResult(): string {
        return this.buffer;
    }
}