/**
 * Created by Anushavan on 3/17/17.
 */
import {Component, OnInit} from "@angular/core";
import {DishType} from "../../../shared/model/dish-type";
import any = jasmine.any;
import {Dish} from "../../../shared/model/dish";
import {ItemViewInMenuComponent} from "../shared/item-view-in-menu/item-view-in-menu.component";

@Component({
    moduleId: module.id,
    selector: "standard-menu",
    templateUrl: "standard-menu.component.html",
    styleUrls: ["standard-menu.component.css"],
})

export class StandardMenuComponent implements OnInit{
     private availableDishesInStandardMenuByDishTypeId: Dish[] = [];

    private itemViews: ItemViewInMenuComponent[] = [];

     constructor() { }


     ngOnInit(): void {
     }

     getDishTypes(): DishType[]{
      return [];
     }


    
}