import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { DynamicFormModule } from './component/dynamic-form/dynamic-form.module';
// import { DynamicFormComponent } from './dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FormLabelComponent } from './component/field-element/form-label/form-label.component';
import { FormSelectComponent } from './component/field-element/form-select/form-select.component';
import { FormButtonComponent } from './component/field-element/form-button/form-button.component';
import { FormInputComponent } from './component/field-element/form-input/form-input.component';
import { FormErrorComponent } from './component/field-element/form-error/form-error.component';
import { ValidateOnBlurDirective } from './directive/validate-on-blur.directive';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    // DynamicFormComponent,
    FormLabelComponent,
    FormSelectComponent,
    FormButtonComponent,
    FormInputComponent,
    FormErrorComponent,
    ValidateOnBlurDirective,
  ],
  imports: [
    BrowserModule,
    DynamicFormModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    // DynamicFormComponent,
    FormLabelComponent,
    FormSelectComponent,
    FormButtonComponent,
    FormInputComponent,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
