import { Component } from "@angular/core";

@Component({
    selector: "route-2-points",
    moduleId: module.id,
    templateUrl: "./route-2-points.component.html"
})
export class Route2PointsComponent {
    punkt1 = {
        strasse: "Rennweg",
        hausnr: "89b",
        plz: "1030"
    };

    punkt2 = {
        strasse: "Leberweg",
        hausnr: "10/2/30",
        plz: "1110"
    };
}
