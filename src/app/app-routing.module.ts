import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

// COG
import { CogDsmLindenrainComponent } from './cog/cog-dsm-lindenrain/cog-dsm-lindenrain.component';
import { CogDsmStrenzfeldComponent } from './cog/cog-dsm-strenzfeld/cog-dsm-strenzfeld.component';
import { CogDmsStrenzfeldStyleComponent } from './cog/cog-dms-strenzfeld-style/cog-dms-strenzfeld-style.component';
import { CogOrthoLindenrainComponent } from './cog/cog-ortho-lindenrain/cog-ortho-lindenrain.component';
import { CogOrthoStrenzfeldComponent } from './cog/cog-ortho-strenzfeld/cog-ortho-strenzfeld.component';

// COG-WMS
import { CogwmsDsmLindenrainComponent } from './cogwms/cogwms-dsm-lindenrain/cogwms-dsm-lindenrain.component';
import { CogwmsDsmStrenzfeldComponent } from './cogwms/cogwms-dsm-strenzfeld/cogwms-dsm-strenzfeld.component';
import { CogwmsOrthoLindenrainComponent } from './cogwms/cogwms-ortho-lindenrain/cogwms-ortho-lindenrain.component';
import { CogwmsOrthoStrenzfeldComponent } from './cogwms/cogwms-ortho-strenzfeld/cogwms-ortho-strenzfeld.component';

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

// WMS-32632
import { Wms32632OrthoStrenzfeldComponent } from './wms32632/wms32632-ortho-strenzfeld/wms32632-ortho-strenzfeld.component';

// WMTS
import { WmtsDsmLindenrainComponent } from './wmts/wmts-dsm-lindenrain/wmts-dsm-lindenrain.component';
import { WmtsOrthoStrenzfeldComponent } from './wmts/wmts-ortho-strenzfeld/wmts-ortho-strenzfeld.component';
import { WmtsOrthoLindenrainComponent } from './wmts/wmts-ortho-lindenrain/wmts-ortho-lindenrain.component';
import { WmtsDsmStrenzfeldComponent } from './wmts/wmts-dsm-strenzfeld/wmts-dsm-strenzfeld.component';

// WMTS-TMS
import { WmtstmsDsmLindenrainComponent } from './wmtstms/wmtstms-dsm-lindenrain/wmtstms-dsm-lindenrain.component';
import { WmtstmsDsmStrenzfeldComponent } from './wmtstms/wmtstms-dsm-strenzfeld/wmtstms-dsm-strenzfeld.component';
import { WmtstmsOrthoLindenrainComponent } from './wmtstms/wmtstms-ortho-lindenrain/wmtstms-ortho-lindenrain.component';
import { WmtstmsOrthoStrenzfeldComponent } from './wmtstms/wmtstms-ortho-strenzfeld/wmtstms-ortho-strenzfeld.component';

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
  // COG-WMS
  {
    path: 'cog-wms/dsm_lindenrain',
    component: CogwmsDsmLindenrainComponent
  },
  {
    path: 'cog-wms/dsm_strenzfeld',
    component: CogwmsDsmStrenzfeldComponent 
  },
  {
    path: 'cog-wms/ortho_lindenrain',
    component: CogwmsOrthoLindenrainComponent
  },
  {
    path: 'cog-wms/ortho_strenzfeld',
    component: CogwmsOrthoStrenzfeldComponent
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
  // WMS
  {
    path: 'wms-32632/ortho_strenzfeld',
    component: Wms32632OrthoStrenzfeldComponent 
  },
  // WMTS
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
  //  WMTS-TMS

  {
    path: 'wmts-tms/dsm_lindenrain',
    component: WmtstmsDsmLindenrainComponent
  },
  {
    path: 'wmts-tms/dsm_strenzfeld',
    component: WmtstmsDsmStrenzfeldComponent
  },
  {
    path: 'wmts-tms/ortho_lindenrain',
    component: WmtstmsOrthoLindenrainComponent
  },
  {
    path: 'wmts-tms/ortho_strenzfeld',
    component: WmtstmsOrthoStrenzfeldComponent
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
