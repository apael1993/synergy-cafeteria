/**
 * Created by Anushavan on 3/17/17.
 */
import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "cafeteria",
    templateUrl: "cafeteria.component.html",
    styleUrls: ["cafeteria.component.css"],
})
export class CafeteriaComponent {

    constructor(private _router: Router) { }

    public navigateToUrl(url : string): void {
        this._router.navigate([url]);
    }
}