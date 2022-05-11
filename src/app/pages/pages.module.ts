import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {BocksModule} from "../blocks/bocks.module";



@NgModule({
  declarations: [
    LandingPageComponent
  ],
  exports: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    BocksModule
  ]
})
export class PagesModule { }
