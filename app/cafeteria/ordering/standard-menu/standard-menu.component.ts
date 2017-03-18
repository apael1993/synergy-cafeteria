/**
 * Created by Anushavan on 3/17/17.
 */
import {Component, OnInit} from "@angular/core";
import {DishType} from "../../../shared/model/dish-type";
import {Dish} from "../../../shared/model/dish";
import {DataServiceImpl} from "../../../shared/impl/data.service.impl";

@Component({
    moduleId: module.id,
    selector: "standard-menu",
    templateUrl: "standard-menu.component.html",
    styleUrls: ["standard-menu.component.css"],
})

export class StandardMenuComponent implements OnInit {

    private dishTypes: Array<DishType>;
    private dishes: Map<number, Array<Dish>>;

    constructor(private dataService: DataServiceImpl) { }

    ngOnInit(): void {
        this.dataService.loadDishTypes()
            .subscribe((dishTypes: Array<DishType>) => {
                this.dishTypes = dishTypes;
                this.initializeDishesMap();
            });
    }

    private initializeDishesMap(): void {
        this.dishes = new Map<number, Array<Dish>>();
        this.dishTypes.forEach((dishType: DishType) => {
            this.dataService.loadDishesByType(dishType.getId())
                .subscribe((dishes: Array<Dish>) => {
                    this.dishes.set(dishType.getId(), dishes);
                })
        })
    }

}