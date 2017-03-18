/**
 * Created by Anushavan on 3/17/17.
 */
import {Component, OnInit} from "@angular/core";
import {OrderDetail} from "../shared/model/order-detail";

@Component({
    moduleId: module.id,
    selector: "cafeteria",
    templateUrl: "cafeteria.component.html",
    styleUrls: ["cafeteria.component.css"],
})

export class CafeteriaComponent implements OnInit{

    constructor() { }

    ngOnInit(): void {
        localStorage.setItem('orderList', JSON.stringify(Array<OrderDetail>()));
    }


}