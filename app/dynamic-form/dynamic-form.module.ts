import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
// import { FormButtonComponent } from '../field-element/form-button/form-button.component';
// import { FormInputComponent } from '../field-element/form-input/form-input.component';
// import { FormSelectComponent } from '../field-element/form-select/form-select.component';
// import { FormLabelComponent } from '../field-element/form-label/form-label.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    DynamicFieldDirective,
    DynamicFormComponent,
    // FormButtonComponent,
    // FormInputComponent,
    // FormSelectComponent,
    // FormLabelComponent
  ],
  exports: [
    DynamicFormComponent
  ],
  entryComponents: [
    // FormButtonComponent,
    // FormInputComponent,
    // FormSelectComponent,
    // FormLabelComponent
  ]
})
export class DynamicFormModule {}
