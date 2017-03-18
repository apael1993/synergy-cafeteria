import {Component, OnInit, Input, AfterContentInit, Output, EventEmitter} from "@angular/core";
import {Dish} from "../../../shared/model/dish";
import {OrderDetail} from "../../../shared/model/order-detail";
/**
 * Created by Home on 3/17/2017.
 */

@Component({
    moduleId: module.id,
    selector: "item-view-in-menu",
    templateUrl: "item-view-in-menu.component.html",
    styleUrls: ["item-view-in-menu.component.css"],
})

export class ItemViewInBasketComponent implements OnInit, AfterContentInit {
    @Input("dish")
    private _dish:Dish;

    private _itemId: number;

    private _itemName: string;
    private _itemImagePath: string;
    private _price: number;

    private _itemCount: number = 1;

    get itemId(): number {
        return this._itemId;
    }

    get itemName(): string {
        return this._itemName;
    }


    get itemImagePath(): string {
        return this._itemImagePath;
    }


    get price(): number {
        return this._price;
    }

    get dish(): Dish {
        return this._dish;
    }

    set dish(value: Dish) {
        this._dish = value;
    }

    set itemCount(value: number) {
        this._itemCount = value;
        this.selectedCount.emit(this._itemCount);
    }

    get itemCount(): number{
        return this._itemCount;
    }

    ngAfterContentInit(): void {
        this._itemId = this._dish.getId();
        this._itemName = this._dish.getName();
        this._itemImagePath = this._dish.getImagePath();
        this._price = this._dish.getPrice();

    }


    ngOnInit(): void {
        this.selectedCount.emit(1);
    }

    removeItemFromOrderList():void{
        let orders: Array<OrderDetail>  = this.orderDetailsFromString(localStorage.getItem("orderList"));
        let orderDetail: OrderDetail = new OrderDetail();
        orderDetail.setDish(this.dish);
        orderDetail.setCount(this._itemCount);
        orders = orders.filter(orderDetail => {
            return orderDetail.getDish().getId() !== this.dish.getId();
        });
        localStorage.setItem("orderList",JSON.stringify(orders));

    }

    private orderDetailsFromString(json:string):Array<OrderDetail>{
        return null;
    }




}