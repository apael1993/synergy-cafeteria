/**
 * Created by Anushavan on 3/17/17.
 */
import {DishType} from "./dish-type";

export class Dish {

    private id: number;
    private name: string;
    private price: number;
    private imagePath: string;
    private dishType: DishType;
    
    public constructor() { }

    public getId(): number {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }
    
    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number) {
        this.price = price;
    }

    public getImagePath(): string {
        return this.imagePath;
    }

    public setImagePath(imagePath: string) {
        this.imagePath = imagePath;
    }

    public getDishType(): DishType {
        return this.dishType;
    }

    public setDishType(dishType: DishType) {
        this.dishType = dishType;
    }
}