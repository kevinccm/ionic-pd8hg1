import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../dynamic-form/models/field.interface';
import { FieldConfig } from '../../dynamic-form/models/field-config.interface';

@Component({
  selector: 'form-button',
  styleUrls: ['form-button.component.scss'],
  templateUrl: 'form-button.component.html'
})
export class FormButtonComponent implements Field {
  @Input()
  config: FieldConfig[];
  @Input()
  group: FormGroup;

}
