import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateRegisterPageRoutingModule } from './update-register-routing.module';

import { UpdateRegisterPage } from './update-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateRegisterPageRoutingModule
  ],
  declarations: [UpdateRegisterPage]
})
export class UpdateRegisterPageModule {}
