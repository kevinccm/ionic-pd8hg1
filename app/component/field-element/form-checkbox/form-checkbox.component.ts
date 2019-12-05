import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../component/dynamic-form/models/field.interface';
import { FieldConfig } from '../../component/dynamic-form/models/field-config.interface';

@Component({
  selector: 'form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss'],
})
export class FormCheckboxComponent implements Field, OnInit {
  @Input()
  config: FieldConfig[];
  @Input()
  group: FormGroup;

  get currentItem() {return this.group.get(this.config.name); };

  constructor() { }

  ngOnInit() {
  }
}
