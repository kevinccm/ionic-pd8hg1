import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../component/dynamic-form/models/field.interface';
import { FieldConfig } from '../../component/dynamic-form/models/field-config.interface';

@Component({
  selector: 'form-select',
  templateUrl: 'form-select.component.html',
  styleUrls: ['form-select.component.scss'],
})
export class FormSelectComponent implements Field {
  @Input()
  config: FieldConfig[];
  @Input()
  group: FormGroup;

  // get currentItem() {return this.group.get(this.config.name); };

  // onBlur() {
  //   console.log(this.group.get(this.config.name));
  //   // this.checkError = true;
  // }
}
