export const uiCloseButton = {
  header: `Close Button`,
  html: `<div class="aa-close-button fa fa-times"></div> `,
  ts: `import { Component } from '@angular/core';

  @Component({
      selector: 'aa-close-button',
      styles: './aa-close-button.component.sass',
      template: './aa-close-button.component.html',
    })

  export class AACloseButton {
      constructor() { }
  }`,
    sass: `.aa-close-button
    width: 20px
    height: 20px
    border: 1px solid #e1e7f6
    border-radius: 3px
    cursor: pointer
    padding-left: 5px
    color: #256eff`
};
export const uiMultiSelectRow = {
  header: `Multiselect Row`,
  html: `<label *ngIf="label">{{label}}</label>
  <div class="content">
    <ng-content></ng-content>
  </div>`,
  ts: `
  import {
    Component,
    Input,
    ContentChildren,
    QueryList,
    AfterContentInit,
    Self,
    OnDestroy,
    Optional,
    forwardRef } from '@angular/core';
  import { MultiselectCheckbox } from '..';
  import { ControlValueAccessor, NgControl } from '@angular/forms';
  import { Subscription } from 'rxjs';


  @Component({
    selector: 'aa-multiselect-row',
    styles: ./multiselect-row.component.sass'))],
    providers: [
      MultiSelectRowService,
    ],
    template: './multiselect-row.component.ts',
  })

  export class MultiselectRow implements ControlValueAccessor, AfterContentInit, OnDestroy {
    @Input() label: string;
    @Input() isValid: boolean;
    @ContentChildren(forwardRef(() => MultiselectCheckbox))
    contentChildren: QueryList<MultiselectCheckbox>;
    onChangeSubscription: Subscription;
    onTouchedSubscription: Subscription;

    constructor(
      @Optional() @Self() public controlDir: NgControl,
      @Self() public rowService: MultiSelectRowService,
      ) {
      if (controlDir) controlDir.valueAccessor = this;
    }

    public writeValue(value: string[]): void {
      if (this.contentChildren) {
        this.contentChildren.forEach(c => c.updateState());
      }
    }

    public registerOnChange(fn: (_: any) => void): void {
      this.onChangeSubscription = this.rowService.model$.subscribe(fn);
    }

    public registerOnTouched(fn: (_: any) => void): void {
      this.onTouchedSubscription = this.rowService.model$.subscribe(fn);
    }

    ngAfterContentInit() {
      this.contentChildren.forEach(c => c.updateState());
      this.controlDir.control.updateValueAndValidity();
    }

    ngOnDestroy() {
      if (this.onChangeSubscription) {
        this.onChangeSubscription.unsubscribe();
      }
      if (this.onTouchedSubscription) {
        this.onTouchedSubscription.unsubscribe();
      }
    }
  }

  export class MultiSelectRowService {
    public model$ = new Subject();

    toggle(label: string, model: string[] = []) {
      const newModel =
        model.includes(label) ? model.filter((c: string) => c !== label) : [...model, label];
      this.model$.next(newModel);
    }
  }`,
  sass: `\:host
  max-width: 600px
  display: flex
  flex-direction: column
  label
      font-family: "Open Sans"
      height: 14px
      font-size: 10px
      color: $charcoal
      font-weight: bold
      text-transform: uppercase
  .content
      display: flex
      transition: border-color 0.15s ease-in-out
      border: 1px solid $blue-grey
      border-radius: 3px
  &.ng-touched.ng-invalid, &.submitted.ng-invalid
    .content
      border-color: $red-error
      border-radius: 3px
  @media (max-width: 596px)
    .content
      flex-direction: column`
};

export const uiMultiselectCheckbox = {
  header: `Multiselect Box`,
  html: `<div
  [ngClass]="{ 'active': isActive }"
  (click)="onClick()">
    <i
      class="fa fa-check"
      [hidden]="!isActive"
      aria-hidden="true">
    </i>
    <img [hidden]="!imageUrl" src="{{imageUrl}}" />
     {{ label || name }}
  </div>`,
  sass: `\:host
  width: 100%
  &:first-child div
    border-left: none
  &:last-child div
    border-right: none
  div
    width: 100%
    height: 40px
    display: inline-block
    color: $disabled-text
    background-color: $bg-colour
    border-left: 1px solid $blue-grey
    border-right: 1px solid $blue-grey
    padding: 8px 20px
    margin-bottom: 0
    font-size: 11px
    line-height: 2.2em
    justify-content: center
    outline: none
    box-shadow: none
    font-weight: bold
    text-transform: uppercase
    text-decoration: none
    background-image: none
    text-align: center
    vertical-align: middle
    touch-action: manipulation
    cursor: pointer
    white-space: nowrap
    user-select: none
    font-family: inherit
    overflow: visible
    box-sizing: border-box
    &.active
      color: $charcoal
      background-color: $white
      border-color: $border-colour
      box-shadow: 0 1px 4px 0 rgba(72, 86, 108, 0.15)
    i
      color: $green
    img
      margin: 0 5px
      height: 26px
  @media (max-width: 596px)
    div
      border-top: 1px solid $blue-grey
      border-bottom: 1px solid $blue-grey`,
  ts: `import { MultiSelectRowService } from './multiSelectRowService';
  import { MultiselectRow } from './multiselect-row.component';
  import { Component, Input, Output, EventEmitter, AfterContentInit, OnInit } from '@angular/core';
  import { NgControl } from '@angular/forms';

  @Component({
    selector: 'aa-multiselect-checkbox',
    styles: './multiselect-checkbox.component.sass',
    template: './multiselect-checkbox.component.html',
  })

  export class MultiselectCheckbox implements OnInit {
    @Input() label: string;
    @Input() imageUrl: string;
    @Input() name: string;
    @Output() onChange = new EventEmitter();

    public isActive: boolean;

    constructor(
      public ngControl: NgControl,
      public rowservice: MultiSelectRowService,
      ) { }

    onClick() {
      const value = this.name || this.label;
      this.onChange.emit(value);
      this.rowservice.toggle(value, this.ngControl.value);
      this.updateState();
    }

    updateState() {
      const labels = this.ngControl.value;
      if (labels && labels.constructor === Array) {
        this.isActive = labels.includes(this.name || this.label);
      }
    }

    ngOnInit() {
      this.updateState();
    }
  }
  `
};

export const uiDropDown = {
  header: `Dropdown Button`,
  html: `
  <div
    class="btn-group"
    [isDisabled]="disabled"
    dropdown>
    <button
      dropdownToggle
      type="button"
      class="btn ui-select-toggle dropdown-toggle sa-box aa-select-button">
      <span *ngIf="selectedOption?.meta && selectedOption?.meta?.image" class="aa-select-image">
        <img [src]="selectedOption.meta.image">
      </span>
      <span>{{ selectedOption?.text || selectedOption?.id || placeholder }}</span>
      <span *ngIf="caret" class="caret"></span>
    </button>
    <ul *dropdownMenu class="dropdown-menu" role="menu">
      <div *ngIf="withIcon">
        <li
          role="menuitem"
          class="aa-select-option"
          (click)="optionSelected(option)"
          *ngFor="let option of dropdownOptions$ | async; let isLast = last">
          <div>
            <img
              [src]="option?.meta?.image"
              [style.self-approved]="true"/>
          </div>

          <div>
            <label>{{ option?.meta?.title }}</label>
            <span>{{ option?.meta?.description }}</span>
          </div>
        </li>
        <li *ngIf="!isLast" class="divider dropdown-divider"></li>
      </div>

      <ng-container *ngIf="!withIcon">
        <li
          role="menuitem"
          *ngFor="let option of dropdownOptions$ | async">
          <a class="dropdown-item" href="#" (click)="optionSelected(option); $event.preventDefault()">{{ option.text }}</a>
        </li>
      </ng-container>
    </ul>
  </div>
  `,
    ts: `
  import { Observable, Subject, Subscription } from 'rxjs';
  import { IDropdownOption } from '../../interfaces/shared.interfaces';
  import { Component, Input, EventEmitter,
    Output, Optional, Self, ViewChild, ElementRef, OnChanges } from '@angular/core';
  import { ControlValueAccessor, NgControl } from '@angular/forms';

  @Component({
    selector: 'aa-select-new',
    styles: [String(require('!!css-loader!sass-loader!./aa-select-new.component.sass'))],
    templateUrl: './aa-select-new.component.html',
  })

  export class AASelectNew implements ControlValueAccessor {
    @Input('placeholder') placeholder: string;
    @Input('options$') dropdownOptions$: Observable<IDropdownOption[]>;
    @Input() withIcon: boolean;
    @Input() caret: boolean;
    @Input() disabled: boolean;
    @Output() modelChanged: EventEmitter<IDropdownOption> = new EventEmitter();
    private onNgModelChangedCallback: (value: any) => void = () => {};

    selectedOption: IDropdownOption;
    public filteredDropdownOptions: IDropdownOption[];

    constructor(
      @Optional() @Self() public controlDir: NgControl,
    ) {
      if (controlDir) controlDir.valueAccessor = this;
    }

    public searchFocusTrigger = new EventEmitter<boolean>();

    public writeValue(value: IDropdownOption): void {
      this.selectedOption = value;
    }

    public registerOnChange(fn: () => void): void {
      this.onNgModelChangedCallback = fn;
    }

    public registerOnTouched(fn: () => void): void {}

    optionSelected(option: IDropdownOption) {
      this.selectedOption = option;
      this.modelChanged.emit(option);
      this.onNgModelChangedCallback(option);
    }
  }`,
  sass: `.searchField
  display: flex
  height: 40px
  border: 1px solid lightgrey
  border-right: none
  border-left: none
  .magnifying_glass
    width: 40px
    padding: 11px
  .searchBar
    width: 100%
    border: none
    &:focus
      outline: none
    &::placeholder
      font-style: italic
  .btn-group
    width: 100%
  .aa-select-button
    padding: 0px 12px
  .aa-select-image img
    image-rendering: -webkit-optimize-contrast
    width: 15px
    height: 20px
    margin-right: 5px
  ul
    width: 100%
    max-height: 300px
    overflow: hidden
    overflow-y: scroll
  ul[role="menu"]
    min-width: initial
    max-height: 350px
  li[role="menuitem"]
    margin-top: 10px
  li[role="menuitem"]:last-of-type
    margin-bottom: 10px
  li[role="menuitem"] > a
    padding: 3px 7px
  li.aa-select-option
    padding: 10px
  .aa-select-option
    display: flex
    flex-direction: row
    cursor: pointer
    div
      display: flex
      flex-direction: column
      justify-content: center
      cursor: pointer
      label
        height: 10px
        cursor: pointer
        color: $black
      span
        font-size: 12px
        color: $selected-colour
      img
        width: 22px
        height: 30px
        margin-right: 15px
        &.self-approved
          width: 15px
          height: 21px`
};