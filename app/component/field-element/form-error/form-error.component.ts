import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../dynamic-form/models/field.interface';
import { FieldConfig } from '../../dynamic-form/models/field-config.interface';

@Component({
  selector: 'form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.css']
})
export class FormErrorComponent implements OnInit {
  @Input()
  config: FieldConfig[];
  @Input()
  currentItem: FormGroup;
  @Input()
  blur: boolean;

  constructor() { }

  ngOnInit() {
  }

  get errors() {
    return this.currentItem.errors;
  }

  displayErrorMessage() {
    if(this.errors.required) {
      return 'This is required';
    } else if (this.errors.minlength){
      return `Please Input ${this.errors.minlength.requiredLength}`;
    }
  }
}