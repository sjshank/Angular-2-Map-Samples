import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'map-beginner-sam',
  templateUrl: './beginner.component.html',
  styleUrls: ['./beginner.component.less']
})
export class BeginnerComponent {
  title = 'Angular 2 Maps Sample - Beginner';
  lat : number = 51.678518;
  lng : number = 8.809007; 

  /*constructor(private _http: Http){
    this.url = "https://maps.googleapis.com/maps/api/geocode/json";
    this._http.get(`${this.url}?address=440032`)
              .subscribe(
                res => {
                  location = res.json();
                  //this.lat = location['results'][0]['geometry']['location']['lat'];
                  //this.lng = location['results'][0]['geometry']['location']['lng'];
                },
                err => {
                  console.log(err);
                }
              )
  }*/
}
