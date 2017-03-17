import {Component, OnInit} from "@angular/core";
import {Dish} from "../../../../shared/model/dish";
/**
 * Created by Home on 3/17/2017.
 */

@Component({
    moduleId: module.id,
    selector: "item-view-in-menu",
    templateUrl: "item-view-in-menu.component.html",
    styleUrls: ["item-view-in-menu.component.css"],
})

export class ItemViewInMenuComponent implements OnInit{
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



    get itemCount(): number {
        return this._itemCount;
    }

    set itemCount(value: number) {
        this._itemCount = value;
    }

    private _itemId:number;
    private _itemName:string;
    private _itemImagePath:string;
    private _price: number;
    private _itemCount: number = 1;

    constructor(dish:Dish){
        this._itemId = dish.getId();
        this._itemName = dish.getName();
        this._itemImagePath = dish.getImagePath();
        this._price = dish.getPrice();
    }

    ngOnInit(): void {

    }





}