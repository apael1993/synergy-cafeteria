/**
 * Created by Anushavan on 3/17/17.
 */
import {Injectable} from "@angular/core";
import {Order} from "./../model/order";
import {Customer} from "./../model/customer";
import {Dish} from "./../model/dish";
import {Observable} from "rxjs/Rx";

@Injectable()
export class DeSerializationService {

    constructor() { }

    public deserializeOrder(order$: Observable<any>): Observable<Order> {
        return order$.map((data: any) => {
                return this.deserializeFields(data);
            });
    }

    private deserializeFields(data: any): Order {
        let order: Order = new Order();
        let customer: Customer = new Customer();
        let dishes: Array<Dish> = [];

        order.setId(data["_id"]);
        order.setNumber(data["order-number"]);
        order.setDate(data["order-created-date"]);
        order.setCustomer(customer);
        order.setDishes(dishes);

        return order;
    }

}