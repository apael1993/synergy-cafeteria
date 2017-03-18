/**
 * Created by Anushavan on 3/17/17.
 */
import {Component} from "@angular/core";
import {OrderDetail} from "../../shared/model/order-detail";

@Component({
    moduleId: module.id,
    selector: "my-orders",
    templateUrl: "my-orders.component.html",
    styleUrls: ["my-orders.component.css"],
})

export class MyOrdersComponent {
    private _orders : Array<OrderDetail>;


    constructor() {
        this._orders = JSON.parse(localStorage.getItem("orderList"));
    }

    get orders(): Array<OrderDetail> {
        return this._orders;
    }

}