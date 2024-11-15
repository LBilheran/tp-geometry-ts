import Point from "./Point"
import LineString from "./LineString";

export default interface GeometryVisitor {
    visitPoint(point: Point): void;
    visitLineString(points: LineString): void;
}