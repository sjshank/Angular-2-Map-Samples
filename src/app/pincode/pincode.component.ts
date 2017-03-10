import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators }  from '@angular/forms';

import { PincodeService } from './pincode.service';

import { IAddress } from '../address';

@Component({
    selector: 'map-pincode-sam',
    templateUrl: './pincode.component.html',
    styleUrls: ['./pincode.component.css']
})

export class PincodeComponent{
    title : string = 'Angular 2 Map Sample - Pincode Search';
    
    pForm: FormGroup;
    pincode: any;
    markPointers : any[];

    constructor(private _fb: FormBuilder, private pService: PincodeService){

    }

    ngOnInit(){
        this.pForm = this._fb.group({
            'pincode': ['', [Validators.required, Validators.pattern('[0-9]{6,6}')]]
        });
    };

    search() : void{
        if(this.pForm.dirty && this.pForm.valid){
            this.pService.getGeoLocation(this.pincode)
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

    

    private _parseResponse(data){
        console.log(this);
        for (let item of data['results']) {
            this.markPointers.push({
                'lat' : item['geometry']['location']['lat'],
                'lng' : item['geometry']['location']['lng'],
                'label' : 'M',
                'info': item['formatted_address']
            })
        }
    } 
}