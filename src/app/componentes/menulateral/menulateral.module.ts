import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenulateralComponent } from './menulateral.component';
import { CabecalhoModule } from '../cabecalho/cabecalho.module';
import { TreeModule } from 'primeng/tree';



@NgModule({
  declarations: [
    MenulateralComponent
  ],
  imports: [
    CommonModule,
    CabecalhoModule,
    TreeModule
  ],
  exports: [MenulateralComponent]   // <-- MUITO IMPORTANTE: precisa exportar!
})
export class MenulateralModule { 


}
