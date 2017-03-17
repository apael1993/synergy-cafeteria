/**
 * Created by Anushavan on 3/17/17.
 */
import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {CustomerComponent} from ".//demo.component";

 const appRoutes: Routes = [

     {
         path: "",
         redirectTo: "customer",
         pathMatch: 'full'
     },
     {
         path: "customer",
         component: CustomerComponent,
     }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

