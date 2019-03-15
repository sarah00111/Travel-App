import { Component } from "@angular/core";

@Component({
    //definiert wie Komponente später aufgerufen wird
    selector: "home",
    //muss es genau so in jeder Komponente geben 
    moduleId: module.id,
    templateUrl: "home.component.html",
    //können auch mehrere Files sein
    styleUrls: ["home.component.css"]
})
export class HomeComponent {
    output = "";
    textFieldValue = "";

    onButtonTap() {
        this.output = this.textFieldValue;
    }
}