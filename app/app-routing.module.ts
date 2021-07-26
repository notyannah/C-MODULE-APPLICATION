import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./r/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./p/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./c/content/content.module').then( m => m.ContentPageModule)
  },
  {
    path: 'one',
    loadChildren: () => import('./a/one/one.module').then( m => m.OnePageModule)
  },
  {
    path: 'two',
    loadChildren: () => import('./b/two/two.module').then( m => m.TwoPageModule)
  },
  {
    path: 'three',
    loadChildren: () => import('./d/three/three.module').then( m => m.ThreePageModule)
  },
  {
    path: 'four',
    loadChildren: () => import('./e/four/four.module').then( m => m.FourPageModule)
  },
  {
    path: 'five',
    loadChildren: () => import('./f/five/five.module').then( m => m.FivePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
