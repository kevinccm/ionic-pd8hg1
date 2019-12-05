import { Component, Input, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../dynamic-form/models/field.interface';
import { FieldConfig } from '../../dynamic-form/models/field-config.interface';


@Component({
  selector: 'form-input',
  styleUrls: ['form-input.component.scss'],
  templateUrl: 'form-input.component.html'
})
export class FormInputComponent implements Field {
  @Input()
  config: FieldConfig[];
  @Input()
  group: FormGroup;

  // checkError: boolean;

  get currentItem() {return this.group.get(this.config.name); };

  // onBlur() {
  //   console.log(this.group.get(this.config.name));
  //   this.checkError = true;
  // }
}
