import {Observable} from "rxjs/Rx";

/**
 * A class-interface to define some commons of a service providing access to the data.
 * This is a class-interface (or restricting interface) - a special construct that is an abstract class but serves as an
 * interface to enforce some public members and hide others.
 * @class
 */
export abstract class DataService {

    public URL_ORDER_LOAD_LAST: string;
    
    public abstract load(url: string): Observable<any>;

    public abstract add(url: string, data: any): Observable<any>;

    public abstract update(url: string, data: any): Observable<any>;

    public abstract delete(url: string): Observable<any>;

}
