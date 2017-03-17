/**
 * Created by Anushavan on 3/17/17.
 */
import {Injectable} from "@angular/core";
import {Order} from "./../model/order";
import {Observable} from "rxjs/Rx";

@Injectable()
export class DeSerializationService {

    constructor() { }

    public deserializeOrder(order$: Observable<any>): Observable<Order> {
        return order$.flatMap((data: any): Order => {
                return deserializeFields(data);
            });
    }

    private deserializeFields(data: any): Order {

    }
    
}