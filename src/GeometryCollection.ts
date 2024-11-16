import AbstractGeometry from "./AbstractGeometry";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";

export default class GeometryCollection extends AbstractGeometry {
    private geoms?: Array<Geometry>;

    constructor(geoms?: Array<Geometry>) {
        super();
        this.geoms = geoms ? geoms : [] ;
    }

    getType(): string {
        return "GeometryCollection";
    }

    isEmpty(): boolean {
        return this.getNumGeometries() == 0 ? true : false;
    }

    getNumGeometries(): number {
        return this.geoms ? this.geoms.length : 0;
    }

    getGeometryN(n:number): Geometry {
        return this.geoms ? this.geoms[n] : new GeometryCollection();
    }

    translate(dx: number, dy: number): void {
        if (!this.isEmpty()) {
            for (let index = 0; index < this.getNumGeometries(); index++) {
                this.getGeometryN(index).translate(dx,dy);
            }
        }
    }

    clone(): GeometryCollection {
        if (!this.isEmpty()) {
            const geomsClone = new Array<Geometry>;
            this.geoms.forEach(element => {
                geomsClone.push(element.clone());
            });
            return new GeometryCollection(geomsClone);
        }
    }

    accept<T>(visitor: GeometryVisitor<T>): T {
        return visitor.visitGeometryCollection(this);
    }
}