import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthorService } from './header/author.service';
import { BeginnerComponent } from './beginner/beginner.component';
import { PincodeComponent } from './pincode/pincode.component';
import { DirectionComponent } from './direction/direction.component';
import { GeoLocationDirective } from './pincode/pincode.directive';
import { DirectionsMapDirective } from './direction/direction.directive'

import { PincodeService } from './pincode/pincode.service';
import { WindowRef } from './window.service';

import { AgmCoreModule } from 'angular2-google-maps/core';
import {ModalModule} from "ngx-modal";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BeginnerComponent,
    PincodeComponent,
    GeoLocationDirective,
    DirectionComponent,
    DirectionsMapDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDv2DwN6PCEXUxZC3WwXBnl4eQROfj2hQ0'
    }),
    ModalModule
  ],
  providers: [PincodeService, WindowRef, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
