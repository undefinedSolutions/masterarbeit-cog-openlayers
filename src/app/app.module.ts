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

@NgModule({
  declarations: [
    AppComponent,
    TmsOrthoLindenrainComponent,
    HomeComponent,
    TmsOrthoStrenzfeldComponent,
    TmsDsmLindenrainComponent,
    TmsDsmStrenzfeldComponent,
    CogOrthoLindenrainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
