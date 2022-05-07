import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import {LegoUiModule} from "../lego-ui/lego-ui.module";
import { SecondSectionComponent } from './second-section/second-section.component';
import { FourthSectionComponent } from './fourth-section/fourth-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';



@NgModule({
    declarations: [
        HeaderComponent,
        FirstSectionComponent,
        SecondSectionComponent,
        FourthSectionComponent,
        ThirdSectionComponent
    ],
  exports: [
    HeaderComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    FourthSectionComponent,
    ThirdSectionComponent
  ],
  imports: [
    CommonModule,
    LegoUiModule
  ]
})
export class BocksModule { }
