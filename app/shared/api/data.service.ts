import {Observable} from "rxjs/Rx";
import {Order} from "../model/order";
import {DishType} from "../model/dish-type";
import {Dish} from "../model/dish";

/**
 * A class-interface to define some commons of a service providing access to the data.
 * This is a class-interface (or restricting interface) - a special construct that is an abstract class but serves as an
 * interface to enforce some public members and hide others.
 * @class
 */
export abstract class DataService {

    public abstract loadOrder(): Observable<Order>;

    public abstract addOrder(order: Order): Observable<Order>;

    public abstract updateOrder(data: any): Observable<Order>;

    public abstract loadDishTypes(): Observable<Array<DishType>>;

    public abstract loadDishesByType(dishTypeId: number): Observable<Array<Dish>>;
    
}