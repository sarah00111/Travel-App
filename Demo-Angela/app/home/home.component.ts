import { Component } from "@angular/core";

@Component({
    //definiert wie Komponente später aufgerufen wird
    selector: "home",
    //muss es genau so in jeder Komponente geben 
    moduleId: module.id,
	//dependency injection
    templateUrl: "home.component.html",
    //können auch mehrere Files sein
    styleUrls: ["home.component.css"]
})
export class HomeComponent {
	//[text]="output", vom Label
    output = "";
	//[(ngModel)]="textFieldValue", vom TextField
    textFieldValue = "";

    onButtonTap() {
        this.output = this.textFieldValue;
    }
}