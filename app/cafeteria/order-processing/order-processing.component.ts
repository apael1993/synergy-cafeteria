/**
 * Created by Anushavan on 3/17/17.
 */
import {Component, OnInit} from "@angular/core";
import {Order} from "../../shared/model/order";
import {DishType} from "../../shared/model/dish-type";
import {DataServiceImpl} from "../../shared/impl/data.service.impl";

@Component({
    moduleId: module.id,
    selector: "order-processing",
    templateUrl: "order-processing.component.html",
    styleUrls: ["order-processing.component.css"],
})

export class OrderProcessingComponent implements OnInit {
    
    private order: Order;
    private dishTypes: Array<DishType>;

    constructor(private dataService: DataServiceImpl) { }
    
    ngOnInit() {
        this.dataService.loadOrder()
            .subscribe((order: Order) => {
                this.order = order;
            });
        this.dataService.loadDishTypes()
            .subscribe((dishTypes: Array<DishType>) => {
                this.dishTypes = dishTypes;
            });
    }

    private nextOrder(): void {
        this.dataService.updateOrder({
                "_id": this.order.getId()
            })
            .subscribe((order: Order) => {
                this.order = order;
            });
    }

}