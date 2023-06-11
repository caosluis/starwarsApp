import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListStarWarsPageRoutingModule } from './list-star-wars-routing.module';

import { ListStarWarsPage } from './list-star-wars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListStarWarsPageRoutingModule
  ],
  declarations: [ListStarWarsPage]
})
export class ListStarWarsPageModule {}
