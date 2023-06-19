import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { TemplateFormControlsComponent } from './template-form-controls/template-form-controls.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignInComponent, TemplateFormControlsComponent],
  imports: [CommonModule, FormsModule],
})
export class UserModule {}
