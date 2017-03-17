/**
 * Created by Anushavan on 3/17/17.
 */
import {Injectable} from "@angular/core";
import {DeSerializationService} from "./de-serialization.service";
import {DataService} from "../api/data.service";
import {Order} from "./../model/order";
import {Observable} from "rxjs/Rx";

@Injectable()
export class DeService {

    constructor(private dataService: DataService,
                private deSerializationService: DeSerializationService) { }

    public loadOrder(): Observable<Order> {
        let url: string = this.dataService.URL_ORDER_LOAD_LAST;

        let order$: Observable<any> = this.dataService.load(url);
        
        return this.deSerializationService.deserializeOrder(order$);
    }

}