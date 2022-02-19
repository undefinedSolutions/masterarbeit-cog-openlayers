import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TmsOrthoLindenrainComponent } from './tms/tms-ortho-lindenrain/tms-ortho-lindenrain.component';
import { HomeComponent } from './home/home.component';
import { TmsOrthoStrenzfeldComponent } from './tms/tms-ortho-strenzfeld/tms-ortho-strenzfeld.component';
import { TmsDsmLindenrainComponent } from './tms/tms-dsm-lindenrain/tms-dsm-lindenrain.component';
import { TmsDsmStrenzfeldComponent } from './tms/tms-dsm-strenzfeld/tms-dsm-strenzfeld.component';
import { CogOrthoLindenrainComponent } from './cog/cog-ortho-lindenrain/cog-ortho-lindenrain.component';
import { CogOrthoStrenzfeldComponent } from './cog/cog-ortho-strenzfeld/cog-ortho-strenzfeld.component';
import { CogDsmStrenzfeldComponent } from './cog/cog-dsm-strenzfeld/cog-dsm-strenzfeld.component';
import { CogDsmLindenrainComponent } from './cog/cog-dsm-lindenrain/cog-dsm-lindenrain.component';
import { WmsDsmStrenzfeldComponent } from './wms/wms-dsm-strenzfeld/wms-dsm-strenzfeld.component';
import { CogDmsStrenzfeldStyleComponent } from './cog/cog-dms-strenzfeld-style/cog-dms-strenzfeld-style.component';
import { WmsDsmLindenrainComponent } from './wms/wms-dsm-lindenrain/wms-dsm-lindenrain.component';
import { WmsOrthoLindenrainComponent } from './wms/wms-ortho-lindenrain/wms-ortho-lindenrain.component';
import { WmsOrthoStrenzfeldComponent } from './wms/wms-ortho-strenzfeld/wms-ortho-strenzfeld.component';
import { WmtsOrthoStrenzfeldComponent } from './wmts/wmts-ortho-strenzfeld/wmts-ortho-strenzfeld.component';
import { WmtsOrthoLindenrainComponent } from './wmts/wmts-ortho-lindenrain/wmts-ortho-lindenrain.component';
import { WmtsDsmLindenrainComponent } from './wmts/wmts-dsm-lindenrain/wmts-dsm-lindenrain.component';
import { WmtsDsmStrenzfeldComponent } from './wmts/wmts-dsm-strenzfeld/wmts-dsm-strenzfeld.component';
import { CogwmsDsmLindenrainComponent } from './cogwms/cogwms-dsm-lindenrain/cogwms-dsm-lindenrain.component';
import { CogwmsDsmStrenzfeldComponent } from './cogwms/cogwms-dsm-strenzfeld/cogwms-dsm-strenzfeld.component';
import { CogwmsOrthoLindenrainComponent } from './cogwms/cogwms-ortho-lindenrain/cogwms-ortho-lindenrain.component';
import { CogwmsOrthoStrenzfeldComponent } from './cogwms/cogwms-ortho-strenzfeld/cogwms-ortho-strenzfeld.component';
import { Wms32632OrthoStrenzfeldComponent } from './wms32632/wms32632-ortho-strenzfeld/wms32632-ortho-strenzfeld.component';
import { WmtstmsOrthoLindenrainComponent } from './wmtstms/wmtstms-ortho-lindenrain/wmtstms-ortho-lindenrain.component';
import { WmtstmsOrthoStrenzfeldComponent } from './wmtstms/wmtstms-ortho-strenzfeld/wmtstms-ortho-strenzfeld.component';
import { WmtstmsDsmStrenzfeldComponent } from './wmtstms/wmtstms-dsm-strenzfeld/wmtstms-dsm-strenzfeld.component';
import { WmtstmsDsmLindenrainComponent } from './wmtstms/wmtstms-dsm-lindenrain/wmtstms-dsm-lindenrain.component';

@NgModule({
  declarations: [
    AppComponent,
    TmsOrthoLindenrainComponent,
    HomeComponent,
    TmsOrthoStrenzfeldComponent,
    TmsDsmLindenrainComponent,
    TmsDsmStrenzfeldComponent,
    CogOrthoLindenrainComponent,
    CogOrthoStrenzfeldComponent,
    CogDsmStrenzfeldComponent,
    CogDsmLindenrainComponent,
    WmsDsmStrenzfeldComponent,
    CogDmsStrenzfeldStyleComponent,
    WmsDsmLindenrainComponent,
    WmsOrthoLindenrainComponent,
    WmsOrthoStrenzfeldComponent,
    WmtsOrthoStrenzfeldComponent,
    WmtsOrthoLindenrainComponent,
    WmtsDsmLindenrainComponent,
    WmtsDsmStrenzfeldComponent,
    CogwmsDsmLindenrainComponent,
    CogwmsDsmStrenzfeldComponent,
    CogwmsOrthoLindenrainComponent,
    CogwmsOrthoStrenzfeldComponent,
    Wms32632OrthoStrenzfeldComponent,
    WmtstmsOrthoLindenrainComponent,
    WmtstmsOrthoStrenzfeldComponent,
    WmtstmsDsmStrenzfeldComponent,
    WmtstmsDsmLindenrainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
