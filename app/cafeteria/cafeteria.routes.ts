/**
 * Created by Anushavan on 3/17/17.
 */
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {CafeteriaComponent} from "./cafeteria.component";
import {OrderProcessingComponent} from "./order-processing/order-processing.component";
import {StandardMenuComponent} from "./ordering/standard-menu/standard-menu.component";
import {CustomMenuComponent} from "./ordering/custom-menu/custom-menu.component";
import {TodayDealsComponent} from "./ordering/today-deals/today-deals.component";
import {MyOrdersComponent} from "./my-orders/my-orders.component";

const cafeteriaRoutes: Routes = [
    {
        path: "cafeteria",
        component: CafeteriaComponent,
        children: [
            {
                path: "standard-menu",
                component: StandardMenuComponent
            },
            {
                path: "custom-menu",
                component: CustomMenuComponent
            },
            {
                path: "today-deals",
                component: TodayDealsComponent
            },
            {
                path: "my-orders",
                component: MyOrdersComponent
            }
        ]
    },
    {
        path: "order-processing",
        component: OrderProcessingComponent
    }
 ];

export const cafeteriaRouting: ModuleWithProviders = RouterModule.forChild(cafeteriaRoutes);