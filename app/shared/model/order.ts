/**
 * Created by Anushavan on 3/17/17.
 */
import {Customer} from "./customer";
import {Dish} from "./dish";

export class Order {

    private _id: number;
    private _number: number;
    private _date: Date;
    private _totalPrice: number;
    private _customer: Customer;
    private _orders: Array<Dish>;
    
    public constructor() { }

    public getId(): number {
        return this._id;
    }

    public setId(value: number) {
        this._id = value;
    }

    public getNumber(): number {
        return this._number;
    }

    public setNumber(value: number) {
        this._number = value;
    }

    public getDate(): Date {
        return this._date;
    }

    public setDate(value: Date) {
        this._date = value;
    }

    public getTotalPrice(): number {
        return this._totalPrice;
    }

    public setTotalPrice(value: number) {
        this._totalPrice = value;
    }

    public getCustomer(): Customer {
        return this._customer;
    }

    public setCustomer(value: Customer) {
        this._customer = value;
    }

    public getOrders(): Array<Dish> {
        return this._orders;
    }

    public setOrders(value: Array<Dish>) {
        this._orders = value;
    }
    
}