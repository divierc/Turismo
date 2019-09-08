import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'age', loadChildren: './age/age.module#AgePageModule' },
  { path: 'actividades', loadChildren: './actividades/actividades.module#ActividadesPageModule' },
  { path: 'actividadesdetalle/:id', loadChildren: './actividadesdetalle/actividadesdetalle.module#ActividadesdetallePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
