/**
 * Created by Anushavan on 3/17/17.
 */
import {Component, OnInit} from "@angular/core";
import {DeService} from "./../../shared/impl/de.service";

@Component({
    moduleId: module.id,
    selector: "order-processing",
    templateUrl: "order-processing.component.html",
    styleUrls: ["order-processing.component.css"],
})

export class OrderProcessingComponent implements OnInit {
    
    private order: Order;

    constructor(private deService: DeService) { }
    
    ngOnInit() {
        
    }
    
}