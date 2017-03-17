/**
 * Created by Anushavan on 3/17/17.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CafeteriaComponent} from "./cafeteria.component";
import {cafeteriaRouting} from "./cafeteria.routes";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        cafeteriaRouting
    ],
    declarations: [
        CafeteriaComponent
    ],
})

export class CafeteriaModule { }