/**
 * Created by Anushavan on 3/17/17.
 */
import {Component, OnInit} from "@angular/core";
import {DataServiceImpl} from "../../shared/impl/data.service.impl.ts";
import {Order} from "../../shared/model/order";

@Component({
    moduleId: module.id,
    selector: "order-processing",
    templateUrl: "order-processing.component.html",
    styleUrls: ["order-processing.component.css"],
})

export class OrderProcessingComponent implements OnInit {
    
    private order: Order;

    constructor(private dataService: DataServiceImpl) { }
    
    ngOnInit() {
        this.dataService.loadOrder()
            .subscribe((order: Order) => {
                this.order = order;
            });
    }
    
}