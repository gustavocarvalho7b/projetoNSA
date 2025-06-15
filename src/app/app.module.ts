import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { MenulateralModule } from './componentes/menulateral/menulateral.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CabecalhoModule,
    MenulateralModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
