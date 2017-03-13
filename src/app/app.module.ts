import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BeginnerComponent } from './beginner/beginner.component';
import { PincodeComponent } from './pincode/pincode.component';
import { GeoLocationDirective } from './pincode/pincode.directive';

import { PincodeService } from './pincode/pincode.service';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent,
    BeginnerComponent,
    PincodeComponent,
    GeoLocationDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDv2DwN6PCEXUxZC3WwXBnl4eQROfj2hQ0'
    })
  ],
  providers: [PincodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
