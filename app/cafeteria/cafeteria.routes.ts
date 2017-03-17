/**
 * Created by Anushavan on 3/17/17.
 */
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {CafeteriaComponent} from "./cafeteria.component";

const cafeteriaRoutes: Routes = [
        {
            path: "cafeteria",
            component: CafeteriaComponent
        }
 ];

export const cafeteriaRouting: ModuleWithProviders = RouterModule.forChild(cafeteriaRoutes);