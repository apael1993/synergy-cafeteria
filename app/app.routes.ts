/**
 * Created by Anushavan on 3/17/17.
 */
import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {CafeteriaComponent} from "./cafeteria/cafeteria.component";

 const appRoutes: Routes = [

     {
         path: "",
         redirectTo: "cafeteria",
         pathMatch: 'full'
     },
     {
         path: "cafeteria",
         component: CafeteriaComponent,
     }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

