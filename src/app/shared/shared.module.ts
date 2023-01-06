import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ValidationMessageComponent } from './validation-message/validation-message.component';
import { StringUtil } from './utils/string.utils';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, ValidationMessageComponent],
  imports: [CommonModule, RouterModule],
  providers: [StringUtil],
  exports: [NavbarComponent, ValidationMessageComponent],
})
export class SharedModule {}
