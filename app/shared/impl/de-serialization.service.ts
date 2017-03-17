/**
 * Created by Anushavan on 3/17/17.
 */
import {Injectable} from "@angular/core";
import {Order} from "../model/order";
import {Customer} from "../model/customer";
import {OrderDetail} from "../model/order-detail";
import {DishType} from "../model/dish-type";
import {Dish} from "../model/dish";
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

        order.setId(data["_id"]);
        order.setNumber(data["order-number"]);
        order.setDate(data["order-created-date"]);
        order.setTotalPrice(data["total-price"]);
        order.setCustomer(this.deserializeCustomer(data["customer"]));
        order.setOrderDetail(this.deserializeOrderDetails(data["order-details"]));

        return order;
    }

    private deserializeCustomer(data: any): Customer {
        let customer: Customer = new Customer();

        customer.setId(data["_id"]);
        customer.setFirstName(data["first-name"]);
        customer.setLastName(data["last-name"]);
        customer.setCompany(data["company"]);

        return customer;
    }

    private deserializeOrderDetails(data: Array<any>): Array<OrderDetail> {
        return data.map((orderDetail: any) => {
            return this.deserializeOrderDetail(orderDetail);
        })
    }

    private deserializeOrderDetail(data: any): OrderDetail {
        let orderDetail: OrderDetail = new OrderDetail();

        orderDetail.setCount(data["count"]);
        orderDetail.setDish(this.deserializeDish(data));

        return orderDetail;
    }

    private deserializeDish(data: any): Dish {
        let dish: Dish = new Dish();

        dish.setId(data["_id"]);
        dish.setName(data["name"]);
        dish.setPrice(data["price"]);
        dish.setImagePath(data["image-path"]);
        dish.setDishType(this.deserializeDishType(data["dish-type"]));

        return dish;
    }
    
    private deserializeDishType(data: any): DishType {
        let dishType: DishType = new DishType();
        
        dishType.setId(data["_id"]);
        dishType.setName(data["name"]);
        
        return dishType;
    }

}