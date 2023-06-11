import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestCrudPage } from './test-crud.page';

const routes: Routes = [
  {
    path: '',
    component: TestCrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestCrudPageRoutingModule {}
