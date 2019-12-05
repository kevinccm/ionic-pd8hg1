import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { FieldConfig } from '../../app/dynamic-form/models/field-config.interface';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  form: FormGroup;

  config: FieldConfig = [
    {
      type: 'label',
      label: 'This is Label',
    },
    {
      type: 'select',
      label: 'Your Title',
      name: 'title',
      options: ['Mr', 'Mrs', 'Miss'],
      placeholder: 'Select Your Title',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'First name',
      name: 'first-name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)], 
      errorMessage: {
        minLength: 'Please Input 4 characters',
        required: 'This is required',
      }
    },
    {
      type: 'input',
      label: 'Last name',
      name: 'last-name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {  
      type: 'button',
      label: 'Submit',
      name: 'submit',
      fillAll: true,
    }
  ];

  constructor(private fb: FormBuilder,
  public navCtrl: NavController) {}

  get controls() { return this.config.filter(({type}) => type !== 'button' && type !== 'label'); }

  ngOnInit() {
    this.form = this.createGroup();
  }

  createGroup() {
    const group = this.fb.group({});
    this.controls.forEach(control => group.addControl(control.name, this.createControl(control)));
    // return new FormGroup(group.controls, { updateOn: 'blur'});
    return new FormGroup(group.controls);
  }

  createControl(config: FieldConfig) {
    const { disabled, validation, value} = config;
    return this.fb.control({ disabled, value }, validation);
  }

  handleSubmit(event) {
    alert();
  }

}
