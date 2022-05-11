import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {BocksModule} from "./blocks/bocks.module";
import {PagesModule} from "./pages/pages.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BocksModule,
        PagesModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
