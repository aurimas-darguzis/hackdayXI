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
      border: 1px solid #e1e7f6y
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
  sass: `
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
    border-left: 1px solid #e1e7f6y
    border-right: 1px solid #e1e7f6y
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
      background-color: #ffffff
      border-color: $border-colour
      box-shadow: 0 1px 4px 0 rgba(72, 86, 108, 0.15)
    i
      color: $green
    img
      margin: 0 5px
      height: 26px
  @media (max-width: 596px)
    div
      border-top: 1px solid #e1e7f6y
      border-bottom: 1px solid #e1e7f6y`,
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

export const uiSwitchButton = {
  header: `Switch Button`,
  html: `<div class="onoffswitch">
  <input
   #checkbox
   type="checkbox"
   class="onoffswitch-checkbox"
   id="{{id}}-onoffswitch"
   />
  <label class="onoffswitch-label" for="{{name}}-onoffswitch" (click)="handleChange(checkbox.checked)">
      <span class="onoffswitch-inner"></span>
      <span class="onoffswitch-switch"></span>
  </label>
  </div>`,
  ts: `
  import { Component, Input, Self, Optional, ViewChild, ElementRef, OnInit } from '@angular/core';
  import { ControlValueAccessor, NgControl } from '@angular/forms';

  @Component({
    selector: 'app-aa-switch',
    templateUrl: './aa-switch.component.html',
    styleUrls: ['./aa-switch.component.sass']
  })
  export class AaSwitchComponent implements ControlValueAccessor {
    @Input() name: string;
    @Input() id: string;
    @ViewChild('checkbox') checkbox: ElementRef;
    onChange: any;

    handleChange (value: boolean) {
      this.onChange(!value);
    }

    constructor(
      @Optional() @Self() public controlDir: NgControl,
      ) {
      if (controlDir ) {
        controlDir.valueAccessor = this;
      }
    }

    public writeValue(isOn: boolean): void {
      this.checkbox.nativeElement.checked = isOn;
    }

    public registerOnChange(fn: boolean) {
      this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {}
  }

  `,
  sass: `
  .onoffswitch
    position: relative
    width: 58px
    user-select: none

  .onoffswitch-checkbox
    display: none

  .onoffswitch-inner
    display: block
    width: 200%
    margin-left: -100%
    transition: margin 0.3s ease-in 0s

  .onoffswitch-inner:before, .onoffswitch-inner:after
    display: block
    float: left
    width: 50%
    height: 21px
    padding: 0
    line-height: 22px
    font-size: 10px
    font-weight: normal
    color: #ffffff
    box-sizing: border-box

  .onoffswitch-inner:before
    content: "ON"
    padding-left: 10px
    background-color: #256eff
    color: #ffffff

  .onoffswitch-inner:after
    content: "OFF"
    padding-right: 10px
    background-color: #e1e7f6
    color: #f5f5f5
    text-align: right

  .onoffswitch-switch
    &.onoffswitch-switch-hide
      display: none

  .onoffswitch-switch
    display: block
    width: 17px
    height: 17px
    margin: 2.5px
    background: #ffffff
    position: absolute
    top: 0
    bottom: 0
    right: 36px
    border: 1px solid #fbfcfe
    border-radius: 3px
    transition: all 0.3s ease-in 0s

  label.onoffswitch-label
    display: block
    overflow: hidden
    cursor: pointer
    border: 1px solid #fbfcfe
    border-radius: 3px
    height: 23px

  .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner
    margin-left: 0

  .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch
    right: 1px`
};

export const uiSecondaryButton = {
  header: `Secondary Button`,
  html: ` <button (click)="notifyParent()"
  class="{{ size }} {{ type }}"
  [disabled]="disabled">
{{ label }}
<i *ngIf="icon"
class="fa {{icon}}"
aria-hidden="true"></i>
</button>`,
  ts: `import { Component, Input, Output, EventEmitter } from '@angular/core';

  @Component({
    selector: 'aa-secondary-button',
    styles: './aa-secondary-button.component.sass',
    template: './aa-secondary-button.component.html'',
  })

  export class AASecondaryButton {
    @Input() label: string;
    @Input() type: string;
    @Input() icon: string;
    @Input() size: string;
    @Input() disabled: boolean;
    @Output() modelChanged = new EventEmitter();

    notifyParent() {
      this.modelChanged.emit();
    }
  }
  `,
  css: `
  button
      display: inline-block
      margin-bottom: 0
      font-weight: bold
      text-align: center
      vertical-align: middle
      touch-action: manipulation
      cursor: pointer
      background-image: none
      border: 1px solid transparent
      border-color: #e1e7f6
      white-space: nowrap
      padding-left: 20px
      padding-right: 20px
      font-size: 11px
      border-radius: 3px
      -webkit-user-select: none
      -moz-user-select: none
      -ms-user-select: none
      user-select: none
      background-color: transparent
      text-transform: uppercase
      color: #256eff
      line-height: 15px
      outline: none
      transition: background-color .1s linear
      &:hover
          color: #1d5ad4
      &:disabled
          color: #e1e7f6
      i
          padding-left: 5px

  .xsmall
      width: 40px
      height: 40px
      padding: 0
      border: none
      background: transparent
      &:hover
          border: 1px solid #e1e7f6y
      &:disabled
          color: #e1e7f6y
          border: 1px solid #e1e7f6y
      i
          padding: 0
  .small
      min-width: 80px
      height: 20px
  .medium
      min-width: 100px
      height: 37px
  .large
      min-width: 150px
      height: 37px

  .primary
      background-color: #256eff
      color: #ffffff
      &:hover
          background-color: #1d5ad4
          color: #ffffff
      &:disabled
          background-color: #e1e7f6y
          color: #ffffff
  .success
      background-color: #009900
      color: #ffffff
      &:hover
          background-color: #2b8b2b
          color: #ffffff
      &:disabled
          background-color: #e1e7f6y
          color: #ffffff`
};
