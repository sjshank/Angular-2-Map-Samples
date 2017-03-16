import { Component, NgZone, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin'

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PincodeService } from '../pincode/pincode.service';
import { DirectionsMapDirective } from './direction.directive';

import { CITIES } from './cities';
import { ICity } from './city';
declare var google: any;

@Component({
  selector: 'map-direction-sam',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.less']
})
export class DirectionComponent {
  title = 'Angular 2 Maps Sample - Direction';
  origin: any = {
    'latitude': 21.1421125,
    'longitude': 79.1111018
  };
  destination: any = {
    'latitude': 17.5048757,
    'longitude': 78.3584805
  };
  cities: ICity[] = CITIES;
  dForm: FormGroup;
  @ViewChild(DirectionsMapDirective) vc: DirectionsMapDirective;


  constructor(private _fb: FormBuilder, private pincodeService: PincodeService, private zone: NgZone) {

  }

  ngOnInit(): void {
    this.dForm = this._fb.group({
      'origin': [this.cities[0]['id'], Validators.required],
      'destination': [this.cities[1]['id'], Validators.required]
    });
  }



  getDirections(): void {

    Observable.forkJoin(
      this.pincodeService.getGeoLocation(this.dForm.controls['origin']['value']),
      this.pincodeService.getGeoLocation(this.dForm.controls['destination']['value'])
    )
      .subscribe(data => {
        this.origin = this._parseResponse(data[0]),
          this.destination = this._parseResponse(data[1]),
          this.zone.run(() => {
            this.vc.origin = this.origin;
            this.vc.destination = this.destination;
            if (this.vc.directionsDisplay !== null) {
              this.vc.directionsDisplay.setMap(null);
              this.vc.directionsDisplay = null;
            }
            this.vc.loadDirections();
          });
      });
  }



  private _parseResponse(data) {
    let geoLoc = {};
    for (let item of data['results']) {
      geoLoc['latitude'] = item['geometry']['location']['lat'];
      geoLoc['longitude'] = item['geometry']['location']['lng'];
    }
    return geoLoc;
  }

}



