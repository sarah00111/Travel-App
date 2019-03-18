import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { HttpClientModule } from '@angular/common/http';

//alle Komponenten einbinden, die man verwendet
//!ACHTUNG: keine Dateiendung!
import { AppComponent } from "./app.component";
import { Route2PointsComponent } from "./route-2-points/route-2-points..component";
import { AddressComponent } from "./address/address.component";

//muss man einbinden, um ngModel verwenden zu können, außerdem: siehe imports
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    bootstrap: [
        //welche Komponente am Anfang geladen werden soll
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        //eindinden, wenn man ngModel verwenden will
        NativeScriptFormsModule,
        HttpClientModule
    ],
    declarations: [
        //alle Komponenten einbinden, die man verwenden will
        AppComponent,
        Route2PointsComponent,
        AddressComponent
    ],
    providers: [],
    schemas: [
        //sagt Angular, dass es die .html Files nicht auf Validität prüfen soll (weil wir ja kein HTML verwenden)
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
