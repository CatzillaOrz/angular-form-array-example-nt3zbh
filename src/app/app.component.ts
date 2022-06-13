import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  template: `
    <form [formGroup]="form">
      <ng-container *ngFor='let ctr of formCtrl; let i = index'>
        <ng-container [ngSwitch]='ctr.type'>
         <ng-container *ngSwitchCase="'checkbox'">
          <input [type]="ctr.type" [formControlName]="ctr.key" ngModule [value]='ctr.value'/> Published
         </ng-container>
         <ng-container *ngSwitchCase="'input'">
          <input [type]="ctr.type" [formControlName]="ctr.key" [value]='ctr.value'/> 
         </ng-container>
         <ng-container *ngSwitchCase="'array'">
         <div formArrayName="credentials" *ngFor="let creds of form.controls.credentials?.value; let i = index">
         <ng-container [formGroupName]="i">
           <input placeholder="Username" formControlName="username">
           <input placeholder="Password" formControlName="password">
         </ng-container>
       </div>
         </ng-container>
        </ng-container>
       </ng-container>
       
      <div *ngIf="form.controls.published.value">
        <h2>Credentials</h2>
        <button (click)="addCreds()">Add</button>
        <button (click)="getData()">getData</button>
        <br>
        <textarea [value]="json" rows='20' cols='50'></textarea>

      </div>
    </form>
  `,
})
export class AppComponent {
  form: FormGroup;
  json = '';

  formCtrl = [
    { key: 'published', type: 'checkbox', value: true },
    { key: 'name', type: 'input', value: 'name' },
    { key: 'password', type: 'input', value: 'password' },
    { key: 'credentials', type: 'array' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      // published: true,
      // credentials: this.fb.array([]),
    });
    // this.form.addControl('username', new FormControl('aaa'));
    this.setCtr();
  }

  setCtr() {
    this.formCtrl.forEach((e) => {
      if (e.type === 'array') {
        this.form.addControl(e.key, this.fb.array([]));
      } else {
        this.form.addControl(e.key, new FormControl(e.value));
      }
    });
  }

  addCreds() {
    const creds = this.form.controls.credentials as FormArray;
    creds.push(
      this.fb.group({
        username: '',
        password: '',
      })
    );
  }

  getData() {
    this.json = JSON.stringify(this.form.getRawValue(), null, ' ');
  }
}
