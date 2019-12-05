import { ValidatorFn } from '@angular/forms';

export interface FieldConfig {
  disabled?: boolean,
  label?: string,
  name: string,
  options?: string[],
  placeholder?: string,
  type: string,
  validation?: ValidatorFn[],
  value?: any,
  errorMsg?: string
}

// export interface FormInput {
//   disabled?: boolean,
//   label?: string,
//   name: string,
//   placeholder?: string,
//   type: string,
//   validation?: ValidatorFn[],
//   value?: any
// }