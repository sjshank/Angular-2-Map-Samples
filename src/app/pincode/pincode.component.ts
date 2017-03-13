import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import "rxjs/add/operator/takeWhile";

import { PincodeService } from './pincode.service';

import { IAddress } from '../address';

@Component({
    selector: 'map-pincode-sam',
    templateUrl: './pincode.component.html',
    styleUrls: ['./pincode.component.css']
})


/*
*       Don't forget to unsubscribe()
*/
export class PincodeComponent implements OnDestroy, OnInit {
    title: string = 'Angular 2 Map Sample - Pincode Search';
    private alive: boolean = true;
    pForm: FormGroup;
    pincode: any;
    markPointers: any[];

    constructor(private _fb: FormBuilder, private pService: PincodeService) {

    }

    ngOnInit() {
        this.pForm = this._fb.group({
            'pincode': ['', [Validators.required, Validators.pattern('[0-9]{6,6}')]]
        });
    };

    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.alive = false;
    }

/*
*    takeWhile() operator is an excellent solution to unsubscribing from an observable subscription
*    as part of Angular’s component lifecycle.
*/


    search(): void {
        if (this.pForm.dirty && this.pForm.valid) {
            this.pService.getGeoLocation(this.pincode)
                .takeWhile(() => this.alive)
                .subscribe(
                data => {
                    this._parseResponse(data);
                },
                error => {
                    console.log("Error ocuured-----", error);
                }
                )
        }
    }





    private _parseResponse(data) {
        console.log(this);
        for (let item of data['results']) {
            this.markPointers.push({
                'lat': item['geometry']['location']['lat'],
                'lng': item['geometry']['location']['lng'],
                'label': 'M',
                'info': item['formatted_address']
            })
        }
    }
}