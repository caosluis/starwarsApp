import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'characterlist',
    loadChildren: () => import('./list-star-wars/list-star-wars.module').then(m => m.ListStarWarsPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'list-star-wars',
    loadChildren: () => import('./list-star-wars/list-star-wars.module').then( m => m.ListStarWarsPageModule)
  },
  {
    path: 'character-detail',
    loadChildren: () => import('./character-detail/character-detail.module').then( m => m.CharacterDetailPageModule)
  },
  {
    path: 'test-crud',
    loadChildren: () => import('./test-crud/test-crud.module').then( m => m.TestCrudPageModule)
  },
  {
    path: 'update-register/:id',
    loadChildren: () => import('./update-register/update-register.module').then( m => m.UpdateRegisterPageModule)
  },
  {
    path: 'list-star-wars-films',
    loadChildren: () => import('./list-star-wars-films/list-star-wars-films.module').then( m => m.ListStarWarsFilmsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
