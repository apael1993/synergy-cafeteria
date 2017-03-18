/**
 * Created by Anushavan on 3/17/17.
 */
import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {SerializationService} from "./serialization.service";
import {DataService} from "../api/data.service";
import {Order} from "../model/order";
import {Dish} from "../model/dish";
import {DishType} from "../model/dish-type";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class DataServiceImpl implements DataService {

    private CAFETERIA_SERVICE_URI: string = "";

    constructor(private http: Http,
                private serializationService: SerializationService) { }

    public loadOrder(): Observable<Order> {
        let headers: Headers = new Headers({'Content-Type': 'application/json'});

        let options = new RequestOptions({headers: headers});

        let order$: Observable<any> = this.http
            .get(`${this.CAFETERIA_SERVICE_URI}/orders/next`, options)
            .map(DataServiceImpl.extractResponseData);

        return this.serializationService.deserializeOrder(order$);
    }

    public addOrder(order: Order): Observable<Order> {
        let data: any = this.serializationService.serializeOrder(order);
        let body = JSON.stringify(data);

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http
            .post(`${this.CAFETERIA_SERVICE_URI}/orders`, body, options)
            .map(DataServiceImpl.extractResponseData);
    }

    public updateOrder(data: any): Observable<Order> {
        let headers: Headers = new Headers({'Content-Type': 'application/json'});

        let options = new RequestOptions({headers: headers});

        let order$: Observable<any> = this.http
            .put(`${this.CAFETERIA_SERVICE_URI}/orders/${data["_id"]}`, options)
            .map(DataServiceImpl.extractResponseData);

        return this.serializationService.deserializeOrder(order$);
    }

    public loadDishTypes(): Observable<Array<DishType>> {
        let headers: Headers = new Headers({'Content-Type': 'application/json'});

        let options = new RequestOptions({headers: headers});

        let dishTypes$: Observable<any> = this.http
            .get(`${this.CAFETERIA_SERVICE_URI}/dishtypes`, options)
            .map(DataServiceImpl.extractResponseData);

        return this.serializationService.deserializeDishTypes(dishTypes$);
    }

    public loadDishesByType(dishTypeId: number): Observable<Array<Dish>> {
        let headers: Headers = new Headers({'Content-Type': 'application/json'});

        let options = new RequestOptions({headers: headers});

        let dishes$: Observable<any> = this.http
            .get(`${this.CAFETERIA_SERVICE_URI}/dishtypes/${dishTypeId}/dishes`, options)
            .map(DataServiceImpl.extractResponseData);

        return this.serializationService.deserializeDishes(dishes$);
    }

    private static extractResponseData(response: Response): any {
        let body: any = response.json();

        return body || {};
    }

}