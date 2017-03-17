/**
 * Created by Anushavan on 3/17/17.
 */
import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {DeSerializationService} from "./serialization.service";
import {DataService} from "../api/data.service";
import {Order} from "./../model/order";
import {Observable} from "rxjs/Rx";
import {Dish} from "../model/dish";

@Injectable()
export class DataServiceImpl implements DataService {

    constructor(private http: Http,
                private deSerializationService: DeSerializationService) { }

    public loadOrder(): Observable<Order> {
        let headers: Headers = new Headers({'Content-Type': 'application/json'});

        let options = new RequestOptions({headers: headers});

        let order$: Observable<any> = this.http
            .get("", options)               // TODO: will be added end point;
            .map(DataServiceImpl.extractResponseData);

        return this.deSerializationService.deserializeOrder(order$);
    }

    public addOrder(data: any): Observable<Order> {
        return null;
    }

    public updateOrder(data: any): Observable<Order> {
        return null;
    }

    public deleteOrder(): Observable<any> {
        return null;
    }

    public loadDishTypes(): Observable<any>{
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