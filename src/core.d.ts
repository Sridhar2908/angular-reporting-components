import { EventEmitter, QueryList, ElementRef, SimpleChange, ChangeDetectorRef, IterableDiffers, KeyValueDiffers, OnInit, DoCheck, AfterContentInit, AfterViewInit, OnChanges, AfterContentChecked, OnDestroy } from '@angular/core';
export { ContentChild, Type, forwardRef } from '@angular/core';
export declare let currentTemplateElement: any;
export interface IParentTag {
    tags: Array<any>;
}
export interface IChildChange {
    index: number;
    change: any;
}
export interface IChangeSet {
    [key: string]: Array<IChildChange>;
}
/** Internal Helpers */
export declare class Utils {
    static IterateAndGetChanges(obj: IParentTag): IChangeSet;
}
export declare class BoldReportComponents<W, T> implements IParentTag, OnInit, AfterContentInit, DoCheck, AfterViewInit, OnChanges, AfterContentChecked, OnDestroy {
    protected controlName: string;
    protected el: ElementRef;
    protected cdRef: ChangeDetectorRef;
    tags: Array<string>;
    private ejIterableDiffers;
    private _ejKeyValueDiffers;
    model: T;
    widget: W;
    protected outputs: Array<string>;
    protected inputs: Array<string>;
    protected twoways: Array<string>;
    protected complexProperties: Array<string>;
    protected isEditor: boolean;
    private firstCheck;
    ejIterable: any;
    ejKeyValueDif: any;
    private static bindAndRaiseEvent(instance, model, event);
    constructor(controlName: string, el: ElementRef, cdRef: ChangeDetectorRef, tags: Array<string>, ejIterableDiffers: IterableDiffers, _ejKeyValueDiffers: KeyValueDiffers);
    protected createTwoways(twoways: Array<string>): void;
    protected addTwoways(prop: string): Function;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
    lowerCaseFirstLetter(string: string): string;
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    getTwowayChanges(value: any, ngChanges: any, prop: string): any;
    ngAfterContentChecked(): void;
    ngOnDestroy(): void;
}
export declare class ComplexTagElement implements OnInit, OnChanges, AfterContentChecked {
    tags: Array<string>;
    recentChanges: any;
    hasChanges: boolean;
    firstChange: boolean;
    index: number;
    valueChange: EventEmitter<any>;
    protected complexProperties: Array<string>;
    property: string;
    parent: BoldReportComponents<any, any>;
    complexes: Array<string>;
    constructor(tags: Array<string>);
    ngOnInit(): void;
    ensureCleanObject(): void;
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    getChangesAndReset(): any;
    ngAfterContentChecked(): void;
}
export declare class ArrayTagElement<T extends ComplexTagElement> implements AfterContentInit, AfterContentChecked {
    propertyName: string;
    list: Array<T>;
    children: QueryList<T>;
    recentChanges: Array<IChildChange>;
    hasChanges: boolean;
    constructor(propertyName: string);
    ngAfterContentInit(): void;
    getList(): T[];
    getChangesAndReset(): Array<IChildChange>;
    ngAfterContentChecked(): void;
}
