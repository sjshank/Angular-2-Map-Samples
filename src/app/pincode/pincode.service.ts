import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IAddress } from '../address';

@Injectable()

export class PincodeService{
    geolocationUrl : string =   "https://maps.googleapis.com/maps/api/geocode/json?address=";

    constructor(private _http: Http){

    }

    getGeoLocation(pincode): Observable<any>{
        return this._http.get(`${this.geolocationUrl}${pincode}`)
                        .map((response: Response) => <any> response.json())
                        .catch(this._handleError);
    }

    private _handleError(error: Response){
        return Observable.throw("Error occurred");
    }
}