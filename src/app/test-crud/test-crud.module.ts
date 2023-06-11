import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestCrudPageRoutingModule } from './test-crud-routing.module';

import { TestCrudPage } from './test-crud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestCrudPageRoutingModule
  ],
  declarations: [TestCrudPage]
})
export class TestCrudPageModule {}
