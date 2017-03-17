/**
 * Created by Anushavan on 3/17/17.
 */
import {Dish} from "./dish";

export class OrderDetail {
    
    private dish: Dish;
    private count: number;
    
    constructor() { }

    public getDish(): Dish {
        return this.dish;
    }

    public setDish(dish: Dish) {
        this.dish = dish;
    }

    public getCount(): number {
        return this.count;
    }

    public setCount(count: number) {
        this.count = count;
    }
}