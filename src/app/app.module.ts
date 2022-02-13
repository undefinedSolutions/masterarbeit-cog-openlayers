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
    CogDmsStrenzfeldStyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
