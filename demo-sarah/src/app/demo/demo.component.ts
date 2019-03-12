import { Component } from "@angular/core";

@Component({
    //definiert wie Komponente später aufgerufen wird
    selector: "demo",
    //muss es genau so in jeder Komponente geben 
    moduleId: module.id,
    templateUrl: "demo.component.html",
    //können auch mehrere Files sein
    styleUrls: ["demo.component.css"]
})
export class DemoComponent { 
    labelInput = "";
    textFielValue = "xxx";

    onButtonTap() {
        this.labelInput = this.textFielValue;
    }
}