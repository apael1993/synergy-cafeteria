/**
 * Created by Anushavan on 3/17/17.
 */
import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {SerializationService} from "./serialization.service";
import {DataService} from "../api/data.service";
import {Order} from "./../model/order";
import {Observable} from "rxjs/Rx";
import {Dish} from "../model/dish";
import {DishType} from "../model/dish-type";

@Injectable()
export class DataServiceImpl implements DataService {

    constructor(private http: Http,
                private serializationService: SerializationService) { }

    public loadOrder(): Observable<Order> {
        let headers: Headers = new Headers({'Content-Type': 'application/json'});

        let options = new RequestOptions({headers: headers});

        let order$: Observable<any> = this.http
            .get("/orders/next", options)
            .map(DataServiceImpl.extractResponseData);

        return this.serializationService.deserializeOrder(order$);
    }

    public addOrder(order: Order): Observable<Order> {
        let data: any = this.serializationService.serializeOrder(order);
        let body = JSON.stringify(data);

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http
            .post("/orders", body, options)
            .map(DataServiceImpl.extractResponseData);
    }

    public updateOrder(data: any): Observable<Order> {
        let headers: Headers = new Headers({'Content-Type': 'application/json'});

        let options = new RequestOptions({headers: headers});

        let order$: Observable<any> = this.http
            .put(`/orders/${data["_id"]}`, options)
            .map(DataServiceImpl.extractResponseData);

        return this.serializationService.deserializeOrder(order$);
    }

    public deleteOrder(): Observable<any> {
        return null;
    }

    public loadDishTypes(): Observable<Array<DishType>>{
        return null;
    }

    public loadDishesByType(_dishTypeId: any): Observable<Dish[]>{
        return null;
    }



    private static extractResponseData(response: Response): any {
        let body: any = response.json();

        return body || {};
    }

}