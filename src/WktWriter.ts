import Geometry from "./Geometry";
import Point from "./Point";
import LineString from "./LineString"; 

export default class WktWriter {

    write(geometry: Geometry): string {
        if ( geometry instanceof Point ){
            if (geometry.isEmpty()) {
                return "POINT EMPTY"
            } else {
                return "POINT(" + geometry.x() + " " + geometry.y() +")";
            }
            
        }else if ( geometry instanceof LineString ){
            if (geometry.isEmpty()) {
                return "LINESTRING EMPTY"
            } else {
                let wktlinestring = "LINESTRING(";
                for (let index = 0; index < geometry.getNumPoints(); index++) {
                    wktlinestring += geometry.getPointN(index).x();
                    wktlinestring += " ";
                    wktlinestring += geometry.getPointN(index).y();
                    wktlinestring += ",";
                }
                return wktlinestring.slice(0,-1) + ")";
            };
        }else{
            throw new TypeError("geometry type not supported");
        }
    }
}