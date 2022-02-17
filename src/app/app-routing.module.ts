import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

// COG
import { CogDsmLindenrainComponent } from './cog/cog-dsm-lindenrain/cog-dsm-lindenrain.component';
import { CogDsmStrenzfeldComponent } from './cog/cog-dsm-strenzfeld/cog-dsm-strenzfeld.component';
import { CogDmsStrenzfeldStyleComponent } from './cog/cog-dms-strenzfeld-style/cog-dms-strenzfeld-style.component';
import { CogOrthoLindenrainComponent } from './cog/cog-ortho-lindenrain/cog-ortho-lindenrain.component';
import { CogOrthoStrenzfeldComponent } from './cog/cog-ortho-strenzfeld/cog-ortho-strenzfeld.component';

// TMS
import { TmsDsmLindenrainComponent } from './tms/tms-dsm-lindenrain/tms-dsm-lindenrain.component';
import { TmsDsmStrenzfeldComponent } from './tms/tms-dsm-strenzfeld/tms-dsm-strenzfeld.component';
import { TmsOrthoLindenrainComponent } from './tms/tms-ortho-lindenrain/tms-ortho-lindenrain.component';
import { TmsOrthoStrenzfeldComponent } from './tms/tms-ortho-strenzfeld/tms-ortho-strenzfeld.component';

// WMS
import { WmsDsmLindenrainComponent } from './wms/wms-dsm-lindenrain/wms-dsm-lindenrain.component';
import { WmsDsmStrenzfeldComponent } from './wms/wms-dsm-strenzfeld/wms-dsm-strenzfeld.component';
import { WmsOrthoLindenrainComponent } from './wms/wms-ortho-lindenrain/wms-ortho-lindenrain.component';
import { WmsOrthoStrenzfeldComponent } from './wms/wms-ortho-strenzfeld/wms-ortho-strenzfeld.component';

// WMTS
import { WmtsDsmLindenrainComponent } from './wmts/wmts-dsm-lindenrain/wmts-dsm-lindenrain.component';
import { WmtsOrthoStrenzfeldComponent } from './wmts/wmts-ortho-strenzfeld/wmts-ortho-strenzfeld.component';
import { WmtsOrthoLindenrainComponent } from './wmts/wmts-ortho-lindenrain/wmts-ortho-lindenrain.component';
import { WmtsDsmStrenzfeldComponent } from './wmts/wmts-dsm-strenzfeld/wmts-dsm-strenzfeld.component';

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
    path: 'cog/dsm_strenzfeld_style',
    component: CogDmsStrenzfeldStyleComponent 
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
    path: 'wms/dsm_lindenrain',
    component: WmsDsmLindenrainComponent
  },
  {
    path: 'wms/dsm_strenzfeld',
    component: WmsDsmStrenzfeldComponent
  },
  {
    path: 'wms/ortho_lindenrain',
    component: WmsOrthoLindenrainComponent
  },
  {
    path: 'wms/ortho_strenzfeld',
    component: WmsOrthoStrenzfeldComponent
  },
  //WMTS
  {
    path: 'wmts/dsm_lindenrain',
    component: WmtsDsmLindenrainComponent
  },
  {
    path: 'wmts/dsm_strenzfeld',
    component: WmtsDsmStrenzfeldComponent
  },
  {
    path: 'wmts/ortho_lindenrain',
    component: WmtsOrthoLindenrainComponent
  },
  {
    path: 'wmts/ortho_strenzfeld',
    component: WmtsOrthoStrenzfeldComponent
  },
  { // 404 Not found primary
    path: '**',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
