import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListStarWarsFilmsPage } from './list-star-wars-films.page';

const routes: Routes = [
  {
    path: '',
    component: ListStarWarsFilmsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListStarWarsFilmsPageRoutingModule {}
