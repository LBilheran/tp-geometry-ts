import Envelope from "./Envelope";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";

export default class GeometryWithCachedEnvelope implements Geometry {
    private original?: Geometry;
    private cache?: Envelope;

    constructor(original: Geometry) {
        this.original = original;
        this.cache = null;
    }

    getType(): string {
        return this.original.getType();
    }

    isEmpty(): boolean {
        return this.original.isEmpty();
    }

    translate(dx: number, dy: number): void {
        this.original.translate(dx,dy);
        this.cache = null;
    }
    
    clone(): Geometry {
        return this.original.clone();
    }

    getEnvelope(): Envelope {
        if (this.cache == null) {
            this.cache = this.original.getEnvelope();   
        }
        return this.cache;
    }

    accept(visitor: GeometryVisitor): void {
        this.original.accept(visitor);
    }
    
}