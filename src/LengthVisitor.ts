import GeometryCollection from "./GeometryCollection";
import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class LengthVisitor implements GeometryVisitor<number> {

    constructor(){}

    visitPoint(point: Point): number {
        return 0.0;
    }

    visitLineString(points: LineString): number {
        if (points.isEmpty()) {
            return 0.0;
        } else {
            let longTotal = 0;
            for (let index = 0; index < points.getNumPoints()-1; index++) {
                longTotal += ((points.getPointN(index).x())**2 + (points.getPointN(index).y())**2)**(0.5); 
            }
            return longTotal;
        }
    }

    visitGeometryCollection(geoms: GeometryCollection): number {
        if (geoms.isEmpty()) {
            return 0.0;
        } else {
            let longTotal = 0;
            for (let index = 0; index < geoms.getNumGeometries(); index++) {
                longTotal += geoms.getGeometryN(index).accept(this);
            }
            return longTotal;
        }
    }
}