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

    constructor(private router: Router) { }

    private navigateTo(path: string) {
        this.router.navigate([path]);
    }
}