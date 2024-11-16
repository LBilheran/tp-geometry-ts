import GeometryCollection from "./GeometryCollection";
import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class LogGeometryVisitor implements GeometryVisitor<void> {

    constructor(private log = console.log){}

    visitPoint(point: Point): void {
        if (point.isEmpty()) {
            this.log("Je suis un point vide.");
        } else {
            this.log("Je suis un point avec x=" + point.x() + " et y=" + point.y() + ".");
        }
    }

    visitLineString(points: LineString): void {
        if (points.isEmpty()) {
            this.log("Je suis une polyligne vide.");
        } else {
            this.log("Je suis une polyligne définie par " + points.getNumPoints() + " point(s).");
        }
    }

    visitGeometryCollection(geoms: GeometryCollection): void {
        if (geoms.isEmpty()) {
            this.log("Je suis une collection de géométrie vide.");
        } else {
            this.log("Je suis une collection de géométrie définie par " + geoms.getNumGeometries() + " géométrie(s).");
        }
    }
}