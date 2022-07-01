import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  form: FormGroup;
  json = '';

  formCtrl = [
    { key: 'published', type: 'checkbox', value: true },
    { key: 'name', type: 'input', value: 'name' },
    { key: 'password', type: 'input', value: 'password' },
    {
      key: 'credentials',
      type: 'array',
      control: [],
    },
  ];
  myContext = { $implicit: 'World', localSk: 'Svet' };

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
