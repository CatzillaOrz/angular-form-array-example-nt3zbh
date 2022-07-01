import {
  Component,
  forwardRef,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface inputArrayValue {
  label?: string;
  value?: string;
}

@Component({
  selector: 'app-input-array',
  templateUrl: './input-array.component.html',
  styleUrls: ['./input-array.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputArrayComponent),
      multi: true,
    },
  ],
})
export class InputArrayComponent implements OnInit, ControlValueAccessor {
  constructor() {}

  @Input() value: inputArrayValue[];
  onChange: (value: any) => void;
  onTouch: (value) => void;
  disabled: boolean = false;

  writeValue(value: any): void {
    if (!value || value.constructor !== Array) this.value = [];
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit() {}
}
