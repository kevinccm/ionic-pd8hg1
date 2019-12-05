import { Component, Input, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../component/dynamic-form/models/field.interface';
import { FieldConfig } from '../../component/dynamic-form/models/field-config.interface';


@Component({
  selector: 'form-input',
  templateUrl: 'form-input.component.html',
  styleUrls: ['form-input.component.scss'],
})
export class FormInputComponent implements Field {
  @Input()
  config: FieldConfig[];
  @Input()
  group: FormGroup;

  // checkError: boolean;

  // get currentItem() {return this.group.get(this.config.name); };

  // onBlur() {
  //   console.log(this.group.get(this.config.name));
  //   this.checkError = true;
  // }
}
