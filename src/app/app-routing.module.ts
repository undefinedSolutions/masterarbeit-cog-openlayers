import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TmsDsmLindenrainComponent } from './tms/tms-dsm-lindenrain/tms-dsm-lindenrain.component';
import { TmsDsmStrenzfeldComponent } from './tms/tms-dsm-strenzfeld/tms-dsm-strenzfeld.component';
import { TmsOrthoLindenrainComponent } from './tms/tms-ortho-lindenrain/tms-ortho-lindenrain.component';
import { TmsOrthoStrenzfeldComponent } from './tms/tms-ortho-strenzfeld/tms-ortho-strenzfeld.component';

const routes: Routes = [
  { // Root redirect to home
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { // Home page
    path: 'home',
    data: { title: 'HOME' },
    component: HomeComponent
  },
  // TMS
  {
    path: 'tms/dsm_lindenrain',
    component: TmsDsmLindenrainComponent
  },
  {
    path: 'tms/dsm_strenzfeld',
    component: TmsDsmStrenzfeldComponent 
  },
  {
    path: 'tms/ortho_lindenrain',
    component: TmsOrthoLindenrainComponent 
  },
  {
    path: 'tms/ortho_strenzfeld',
    component: TmsOrthoStrenzfeldComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
