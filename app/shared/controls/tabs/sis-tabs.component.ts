/**
 * Created by hovhannes.ghurshudya on 9/12/2016.
 */

import { Component, Input, Output, ContentChildren, QueryList, EventEmitter, OnChanges, SimpleChange, AfterContentInit } from '@angular/core';
import { TabComponent } from './sis-tab.component';

/**
 * Represents the tab panel control for content navigation
 * @class
 */
@Component({
	moduleId: module.id,
    selector: "sis-tabs",
    templateUrl: "sis-tabs.component.html",
	styleUrls: ["sis-tabs.component.css"]
})

export class TabsComponent implements OnChanges, AfterContentInit {
    
    /**
     * Holds the children of TabComponent
     * @public
     * @member {QueryList<TabComponent>}
     * @type {QueryList<TabComponent>}
     */
    @ContentChildren(TabComponent)
    private _tabItems: QueryList<TabComponent>;

    /**
     * Holds the currently selected tab id
     * @public
     * @member {any}
     * @type {any}
     */
    @Input("selectedTabId")
    private _selectedTabId: any;

	/**
     * Used to emit the _selectedTabId change event
     * @public
     * @member {EventEmitter}
     * @type {EventEmitter}
     */
    @Output("selectedTabIdChange")
    private _selectedTabIdChange = new EventEmitter();

    //From OnChanges
    /**
     * Checks the `_selectedTabId` changes and calls for `selectedTabIdChanged` to handle the change
     * @param {SimpleChange} changes
     * @returns {void}
     * @public
     * @method
     */
    public ngOnChanges( changes: {[ propName: string]: SimpleChange} ): void {
        // check the `_selectedTabId` and select corresponding tab
        if(changes['_selectedTabId']){
            this.selectedTabIdChanged(changes['_selectedTabId'].currentValue);
        }
    }

    // From AfterContentInit
	/**
	 * Subscribes for `tabItems` and triggers it once
	 * @returns {void}
	 * @private
	 * @method
	 */
    public ngAfterContentInit(): void{
		this._tabItems.changes.subscribe(this.tabItemsChanged.bind(this));
        this.tabItemsChanged();
    }

    /**
     * Validates the `tabItems`, if it has no selected tab, then selects the first
     * @returns {void}
     * @private
     * @method
     */
    private tabItemsChanged(): void{
        this.validateTabItems();

	    // if there is no selected tab
        if( 'undefined' === typeof (this.getSelectedTab()) ){
	        let selectedTab = this.getTabById(this._selectedTabId);
	        // select the tab with selectedTabId
	        if( 'undefined' !== typeof selectedTab ){
		        this.selectTab(selectedTab);
	        }
	        // otherwise select the first tab
	        else if( 0 < this._tabItems.length ){
		        this.selectTab(this._tabItems.first);
	        }
        }
    }

	/**
	 * Must be called each time the `_selectedTabId` is changed, it will try to find and select a tab with new id
	 * @param {any} selectedTabId
	 * @returns {void}
	 * @public
	 * @method
	 */
	private selectedTabIdChanged(selectedTabId: any): void{
        let tab = this.getTabById(selectedTabId);
        if( 'undefined' !== typeof tab ){
            this.selectTab(tab);
        }
    }

    /**
     * Marks the given `tabItem` as `selected` and emits the `onTabSelected` event 
     *         if the `tabItem` is not already selected
     *         otherwise does nothing  
     * @param {TabComponent} tabItem
     * @param {boolean} emitEvent emits the change event if is true
     * @returns {void}
     * @public
     * @method
     */
    public selectTab(tabItem: TabComponent): void {
        if(tabItem.selected || !tabItem.isEnabled){
            return; // this tab is already selected
        }

        // deselect the currently selected tab
        let selectedTab: TabComponent = this.getSelectedTab();
	    if( 'undefined' !== typeof selectedTab ){
            selectedTab.selected = false;
        }
        // select given tab
        tabItem.selected = true;
	    // emit the change event
	    this._selectedTabIdChange.emit(tabItem.getId());
    }

	/**
	 * Returns the currently selected tab
	 * @returns {TabComponent | undefined}
	 * @private
	 * @method
	 */
	private getSelectedTab(): TabComponent{
        let tabItems = this._tabItems.toArray();
        for(let i = 0; i < tabItems.length; ++i){
            if( true === tabItems[i].selected ){
                 return tabItems[i];
            }
        }
        return undefined;
    }

    /**
     * Validates tabItems, checks for duplicate ids
     * @throw {Error} `tabItems` must be initiated and have unique ids or undefined ids
     * @returns {void}
     * @private
     * @method
     */
    private validateTabItems(): void {
        if ( 'undefined' === typeof this._tabItems ) {
            throw new Error("Invalid tabItems");
        }
        let tabIds: any[] = [];
        this._tabItems.forEach((tabItem) => {
	        let id = tabItem.getId();
            if(-1 < tabIds.indexOf(id)){
                throw new Error("More than one `tabItem` in `tabItems` has the same `id`: " + tabItem.getId());
            }
            if("undefined" !== typeof id){
	            tabIds.push(tabItem.getId());
            }
        });
    }

    /**
     * Searches for a tab in `tabItems` with given `tabId`
     * @param {any} tabId
     * @returns {TabComponent | undefined}
     * @private
     * @method
     */
    private getTabById(tabId: any): TabComponent {
        if ( 'undefined' === typeof this._tabItems ) {
            return undefined; 
        }

        let tempTabItems = this._tabItems.toArray();
        for(let i = 0; i < tempTabItems.length; ++i){
            if( tempTabItems[i].getId() === tabId ){
                return tempTabItems[i];
            }
        }
        return undefined;
    }
}
