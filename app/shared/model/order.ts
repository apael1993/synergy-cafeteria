/**
 * Created by Anushavan on 3/17/17.
 */
import {Customer} from "./customer";
import {Dish} from "./dish";

export class Order {

    private id: number;
    private number: number;
    private date: Date;
    private totalPrice: number;
    private customer: Customer;
    private dishes: Array<Dish>;
    
    public constructor() { }

    public getId(): number {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getNumber(): number {
        return this.number;
    }

    public setNumber(number: number) {
        this.number = number;
    }

    public getDate(): Date {
        return this.date;
    }

    public setDate(date: Date) {
        this.date = date;
    }

    public getTotalPrice(): number {
        return this.totalPrice;
    }

    public setTotalPrice(totalPrice: number) {
        this.totalPrice = totalPrice;
    }

    public getCustomer(): Customer {
        return this.customer;
    }

    public setCustomer(customer: Customer) {
        this.customer = customer;
    }

    public getDishes(): Array<Dish> {
        return this.dishes;
    }

    public setDishes(dishes: Array<Dish>) {
        this.dishes = dishes;
    }
    
}