import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../dynamic-form/models/field.interface';
import { FieldConfig } from '../../dynamic-form/models/field-config.interface';

@Component({
  selector: 'form-select',
  styleUrls: ['form-select.component.scss'],
  templateUrl: 'form-select.component.html'
})
export class FormSelectComponent implements Field {
  @Input()
  config: FieldConfig[];
  @Input()
  group: FormGroup;

  get currentItem() {return this.group.get(this.config.name); };

  // onBlur() {
  //   console.log(this.group.get(this.config.name));
  //   // this.checkError = true;
  // }
}
