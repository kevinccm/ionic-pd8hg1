import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { FieldConfig } from '../../app/dynamic-form/models/field-config.interface';
import { DynamicFormComponent } from '../../app/dynamic-form/containers/dynamic-form/dynamic-form.component';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
   styleUrls: ['home.scss']
})
export class HomePage implements AfterViewInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'select',
      label: 'Favourite Food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.setDisabled('submit', true);
    this.form.setValue('name', 'Todd Motto');
  }

  submit(value: {[name: string]: any}) {
    console.log(value);
  }

}
