import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

// COG
import { CogDsmLindenrainComponent } from './cog/cog-dsm-lindenrain/cog-dsm-lindenrain.component';
import { CogDsmStrenzfeldComponent } from './cog/cog-dsm-strenzfeld/cog-dsm-strenzfeld.component';
import { CogOrthoLindenrainComponent } from './cog/cog-ortho-lindenrain/cog-ortho-lindenrain.component';
import { CogOrthoStrenzfeldComponent } from './cog/cog-ortho-strenzfeld/cog-ortho-strenzfeld.component';

// TMS
import { TmsDsmLindenrainComponent } from './tms/tms-dsm-lindenrain/tms-dsm-lindenrain.component';
import { TmsDsmStrenzfeldComponent } from './tms/tms-dsm-strenzfeld/tms-dsm-strenzfeld.component';
import { TmsOrthoLindenrainComponent } from './tms/tms-ortho-lindenrain/tms-ortho-lindenrain.component';
import { TmsOrthoStrenzfeldComponent } from './tms/tms-ortho-strenzfeld/tms-ortho-strenzfeld.component';
import { WmsDsmStrenzfeldComponent } from './wms/wms-dsm-strenzfeld/wms-dsm-strenzfeld.component';

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
  // COG
  {
    path: 'cog/dsm_lindenrain',
    component: CogDsmLindenrainComponent
  },
  {
    path: 'cog/dsm_strenzfeld',
    component: CogDsmStrenzfeldComponent 
  },
  {
    path: 'cog/ortho_lindenrain',
    component: CogOrthoLindenrainComponent
  },
  {
    path: 'cog/ortho_strenzfeld',
    component: CogOrthoStrenzfeldComponent
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
  },
  // WMS
  {
    path: 'wms/dsm_strenzfeld',
    component: WmsDsmStrenzfeldComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
