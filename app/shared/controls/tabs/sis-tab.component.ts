/**
 * Created by hovhannes.ghurshudya on 9/23/2016.
 */

import {Component, Input, Attribute} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'sis-tab',
	styleUrls: ["sis-tab.component.css"],
	templateUrl: "sis-tab.component.html"
})
export class TabComponent {

	@Input() isEnabled: boolean = true;

	/**
	 * Holds the input parameter title value
	 * @private
	 * @member {string}
	 * @type {string}
	 */
	@Input("title")
    private _title: string;

	/**
	 * Holds the attribute title value
	 * @private
	 * @member {string}
	 * @type {string}
	 */
	private _titleLabel:string;

	/**
	 * Holds the input parameter id value
	 * @private
	 * @member {any}
	 * @type {any}
	 */
    @Input("id")
    private _id: any;

	/**
	 * Holds the attribute id value
	 * @private
	 * @member {string}
	 * @type {string}
	 */
	private _idLabel:string;

	/**
	 * Component shows its content only when its `selected` is true, toggle to show and hide
	 * @public
	 * @member {boolean}
	 * @type {boolean}
	 */
	public _selected: boolean = false;
	public set selected(selected: boolean){
		this._selected = selected;
	}
	public get selected(){
		return this._selected;
	}

	constructor( @Attribute("title") titleLabel:string, @Attribute("id") idLabel:string ) {
		this._titleLabel = titleLabel;
		this._idLabel = idLabel;
	}

	/**
	 * Returns the input parameter title if exists, otherwise returns the title attribute value
	 * @returns {string}
	 * @public
	 * @method
	 */
	public getTitle(): string{
		return ("undefined" === typeof this._title) ? this._titleLabel : this._title;
	}
	/**
	 * Returns the input parameter id if exists, otherwise returns the id attribute value
	 * @returns {string}
	 * @public
	 * @method
	 */
	public getId(): string{
		return ("undefined" === typeof this._id) ? this._idLabel : this._id;
	}
}
