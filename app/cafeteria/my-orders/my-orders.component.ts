/**
 * Created by Anushavan on 3/17/17.
 */
import {Component} from "@angular/core";
import {Order} from "../../shared/model/order";
import {OrderDetail} from "../../shared/model/order-detail";
import {DataServiceImpl} from "../../shared/impl/data.service.impl";
import {Customer} from "../../shared/model/customer";

@Component({
    moduleId: module.id,
    selector: "my-orders",
    templateUrl: "my-orders.component.html",
    styleUrls: ["my-orders.component.css"],
})

export class MyOrdersComponent {
    private _orders: Array<OrderDetail>;


    constructor(private dataService: DataServiceImpl) {
        this._orders = JSON.parse(localStorage.getItem("orderList"));
    }

    get orders(): Array<OrderDetail> {
        return this._orders;
    }

    saveOrder(): void {
        let order: Order = new Order();
        let customer: Customer = new Customer();

        customer.setCompany("Synergy");
        customer.setId(1);
        customer.setFirstName("John");
        customer.setLastName("Smith");

        order.setTotalPrice(this.calculateTotalPrice());
        order.setDate(new Date());
        order.setOrderDetails(this._orders);
        order.setCustomer(customer);

        this.dataService.addOrder(order);
    }

    calculateTotalPrice(): number {
        let total: number = 0;
        this._orders.forEach((orderDetail: OrderDetail) => {
            total += orderDetail.getDish().getPrice() * orderDetail.getCount();
        });

        return total;
    }

}