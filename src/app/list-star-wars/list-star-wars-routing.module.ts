import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListStarWarsPage } from './list-star-wars.page';

const routes: Routes = [
  {
    path: '',
    component: ListStarWarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListStarWarsPageRoutingModule {}
