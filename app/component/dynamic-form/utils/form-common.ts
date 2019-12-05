import { FormGroup, FormBuilder } from '@angular/forms';
import { FieldConfig } from '../../models/field-config.interface';
export class FormCommon {

  createGroup(fb, controls) {
    const group = fb.group({});
    controls.forEach(control => group.addControl(control.name, this.createControl(fb, control)));
    return new FormGroup(group.controls, { updateOn: 'blur'});
  }

  createControl(fb, config: FieldConfig) {
    const { disabled, validation, value } = config;
    return fb.control({ disabled, value }, validation);
  }
}