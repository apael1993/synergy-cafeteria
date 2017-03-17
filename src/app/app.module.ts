/**
 * Created by Anushavan on 3/17/17.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {AppComponent}  from './app.component';
import {routing, appRoutingProviders} from "./app.routes";
import {CafeteriaModule} from "./cafeteria/cafeteria.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CafeteriaModule,
        routing,
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        appRoutingProviders,
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }