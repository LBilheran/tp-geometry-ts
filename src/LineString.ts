import AbstractGeometry from "./AbstractGeometry";
import Point from "./Point";
import GeometryVisitor from "./GeometryVisitor";

export default class LineString extends AbstractGeometry {
    private points?: Array<Point>;

    constructor(points?: Array<Point>) {
        super();
        this.points = points ? points : [] ;
    }

    getType(): string {
        return "LineString";
    }

    isEmpty(): boolean {
        return this.getNumPoints() == 0 ? true : false;
    }

    getNumPoints(): number {
        return this.points ? this.points.length : 0;
    }

    getPointN(n:number): Point {
        return this.points ? this.points[n] : new Point();
    }

    translate(dx: number, dy: number): void {
        if (!this.isEmpty()) {
            for (let index = 0; index < this.getNumPoints(); index++) {
                this.getPointN(index).translate(dx,dy);
            }
        }
    }

    clone(): LineString {
        if (!this.isEmpty()) {
            const pointsClone = new Array<Point>;
            this.points.forEach(element => {
                pointsClone.push(new Point([element.x(),element.y()]));
            });
            return new LineString(pointsClone);
        }
    }


    accept<T>(visitor: GeometryVisitor<T>): T {
        return visitor.visitLineString(this);
    }

}