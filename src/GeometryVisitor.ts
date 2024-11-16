import Point from "./Point"
import LineString from "./LineString";
import GeometryCollection from "./GeometryCollection";

export default interface GeometryVisitor<T> {
    visitPoint(point: Point): T;
    visitLineString(points: LineString): T;
    visitGeometryCollection(geoms: GeometryCollection): T;
}