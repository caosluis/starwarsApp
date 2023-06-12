import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListStarWarsFilmsPageRoutingModule } from './list-star-wars-films-routing.module';

import { ListStarWarsFilmsPage } from './list-star-wars-films.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListStarWarsFilmsPageRoutingModule
  ],
  declarations: [ListStarWarsFilmsPage]
})
export class ListStarWarsFilmsPageModule {}
