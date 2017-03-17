/**
 * Created by Anushavan on 3/17/17.
 */
import {Order} from "./order";

export class OrderDetail {
    
    private order: Order;
    private count: number;
    
    constructor() { }


    public getOrder(): Order {
        return this.order;
    }

    public setOrder(order: Order) {
        this.order = order;
    }

    public getCount(): number {
        return this.count;
    }

    public setCount(count: number) {
        this.count = count;
    }
}