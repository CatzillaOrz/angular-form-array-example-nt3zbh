import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { laformControler, laformGroup } from './formControlConfig';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormControlComponent implements OnInit {
  @Input()
  formGroup: FormGroup;
  @Input()
  controler: laformControler[] | laformGroup[];
  constructor() {}

  ngOnInit() {}
}
