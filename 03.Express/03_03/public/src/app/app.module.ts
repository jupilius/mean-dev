import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ToolongPipe} from './shared/toolong.pipe';
import {CarPartsComponent} from './car-parts/car-parts.component';
import {CarFooterComponent} from './car-footer/car-footer.component';
import {CarService} from './shared/car.service';
import {HttpModule} from "@angular/http";


@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [
    AppComponent,
    CarPartsComponent,
    CarFooterComponent,
    ToolongPipe // Pipe를 등록하여야 한다.
  ],
  providers: [ CarService ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
