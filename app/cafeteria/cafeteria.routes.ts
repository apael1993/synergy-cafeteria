/**
 * Created by Anushavan on 3/17/17.
 */
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {CafeteriaComponent} from "./cafeteria.component";
import {OrderProcessingComponent} from "./order-processing/order-processing.component";

const cafeteriaRoutes: Routes = [
        {
            path: "cafeteria",
            component: CafeteriaComponent,
            children: [
                {
                    path: "order-processing",
                    component: OrderProcessingComponent
                }
            ]
        }
 ];

export const cafeteriaRouting: ModuleWithProviders = RouterModule.forChild(cafeteriaRoutes);