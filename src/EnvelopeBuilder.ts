import Coordinate from "./Coordinate";
import Envelope from "./Envelope";

export default class EnvelopeBuilder {
    private xmin: number;
    private ymin: number;
    private xmax: number;
    private ymax: number;

    constructor() {
        this.xmin = Number.NaN;
        this.ymin = Number.NaN;
        this.xmax = Number.NaN;
        this.ymax = Number.NaN;
    }

    insert(coordinate: Coordinate) {
        if (Number.isNaN(this.xmin)) {
            this.xmin = coordinate[0];
            this.xmax = coordinate[0];
            this.ymin = coordinate[1];
            this.ymax = coordinate[1];
        } else {
            if (this.xmin>coordinate[0]) {
                this.xmin = coordinate[0];
            } else if (this.xmax<coordinate[0]) {
                this.xmax = coordinate[0];
            }

            if (this.ymin>coordinate[1]) {
                this.ymin = coordinate[1];
            } else if (this.ymax<coordinate[1]) {
                this.ymax = coordinate[1];
            }
        }  
    }

    build(): Envelope {
        return new Envelope([this.xmin,this.ymin],[this.xmax,this.ymax]);
    }
}