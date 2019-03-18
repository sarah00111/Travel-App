import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "address",
    moduleId: module.id,
    templateUrl: "./address.component.html",
    providers: [HttpClient]
})
export class AddressComponent {
    constructor (private http: HttpClient) {

    }
    
    inputAddress = "";
    inputPostCode = "";
    inputCity = "";
    output = "SUSUSU";

    onButtonTap = () => {
        this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
            this.output = data.login;
        });
    }
      

}
