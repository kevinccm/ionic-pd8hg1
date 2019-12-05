import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../dynamic-form/models/field.interface';
import { FieldConfig } from '../../dynamic-form/models/field-config.interface';

@Component({
  selector: 'form-label',
  templateUrl: './form-label.component.html',
  styleUrls: ['./form-label.component.scss']
})
export class FormLabelComponent implements Field {
  @Input()
  config: FieldConfig[];
  @Input()
  group: FormGroup;
}
