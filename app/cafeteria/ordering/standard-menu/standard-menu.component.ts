/**
 * Created by Anushavan on 3/17/17.
 */
import {Component, OnInit} from "@angular/core";
import {DishType} from "../../../shared/model/dish-type";
import {Dish} from "../../../shared/model/dish";
import {ItemViewInMenuComponent} from "../shared/item-view-in-menu/item-view-in-menu.component";
import {DataServiceImpl} from "../../../shared/impl/data.service.impl";

@Component({
    moduleId: module.id,
    selector: "standard-menu",
    templateUrl: "standard-menu.component.html",
    styleUrls: ["standard-menu.component.css"],
})

export class StandardMenuComponent implements OnInit{
     private availableDishesInStandardMenuByDishTypeId: Dish[] = [];
     private disheTypes: DishType[] = [];

     private dishes: Dish[] = [];

     constructor(private dataService: DataServiceImpl) {
         dataService.loadDishTypes().
                            subscribe((_dishTypes:DishType[]) => {

         })
     }


     ngOnInit(): void {

     }

     getDishTypes(): DishType[]{
      return [];
     }

     getDishes(dishTypeId:number): Dish[]{
         let dishes:Dish[] = [];
         return [];
     }

     private f(dishCount: number) {

     }


    
}