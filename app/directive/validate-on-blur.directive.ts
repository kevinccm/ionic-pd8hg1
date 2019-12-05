import { Directive, HostListener, Input } from '@angular/core';

/*reference: https://embed.plnkr.co/04anApG7LpPz6pTfCOHD/*/

@Directive({
  selector: '[validateOnBlur]', 
})

export class ValidateOnBlurDirective {
  @Input('validateFormControl') validateFormControl;

  constructor() { }

  @HostListener('focus', ['$event.target'])
    onFocus(target) {
    console.log("Focus called");
    
    this.validateFormControl.markAsUntouched();
    this.validateFormControl['blur'] = false;
    
    console.log('touched - ' + this.validateFormControl.touched);
    console.log('blur - ' + this.validateFormControl.blur);
    }

  @HostListener('focusout', ['$event.target'])
  onFocusout(target) {
    console.log("Focus out called");
    this.validateFormControl.markAsTouched();
    this.validateFormControl['blur'] = true;
    console.log('blur - ' + this.validateFormControl.blur);
  }
}