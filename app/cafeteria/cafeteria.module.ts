/**
 * Created by Anushavan on 3/17/17.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {cafeteriaRouting} from "./cafeteria.routes";
import {CafeteriaComponent} from "./cafeteria.component";
import {OrderProcessingComponent} from "./order-processing/order-processing.component";
import {OrderReadyComponent} from "./order-ready/order-ready.component";
import {MyOrdersComponent} from "./my-orders/my-orders.component";
import {StandardMenuComponent} from "./ordering/standard-menu/standard-menu.component";
import {CustomMenuComponent} from "./ordering/custom-menu/custom-menu.component";
import {TodayDealsComponent} from "./ordering/today-deals/today-deals.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        cafeteriaRouting
    ],
    declarations: [
        CafeteriaComponent,
        OrderProcessingComponent,
        OrderReadyComponent,
        MyOrdersComponent,
        StandardMenuComponent,
        CustomMenuComponent,
        TodayDealsComponent
    ],
})

export class CafeteriaModule { }