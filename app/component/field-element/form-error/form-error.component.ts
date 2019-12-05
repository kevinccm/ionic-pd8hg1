import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../component/dynamic-form/models/field.interface';
import { FieldConfig } from '../../component/dynamic-form/models/field-config.interface';

@Component({
  selector: 'form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss'],
})
export class FormErrorComponent implements Field, OnInit {
  @Input()
  config: FieldConfig[];
  @Input()
  group: FormGroup;
  errorMsg: string;

  constructor() { }

  ngOnInit() {
  }

  get currentItem() {
    return this.group.get(this.config.name);
  }

  get errors() {
    return this.currentItem.errors;
  }

  get controls() {
    return this.group.controls[this.config.name];
  }

  displayErrorMessage() {
    if (this.controls.touched) {
      if(this.errors === null) {
        return null;
      } else if(this.errors.required) {
        this.errorMsg = this.config.errorMsg.errorRequiredMsg;
      } else if (this.errors.minlength){
        this.errorMsg = this.config.errorMsg.errorMinLengthMsg;
      } else if (this.errors.maxlength){
        this.errorMsg = this.config.errorMsg.errorMaxLengthMsg;
      } else if (this.errors.pattern){
        this.errorMsg = this.config.errorMsg.errorPatternMsg;
      } else if (this.errors.email){
        this.errorMsg = this.config.errorMsg.errorEmailMsg;
      }
    }
    return this.errorMsg;
  }
};