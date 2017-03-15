import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'map-direction-sam',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.less']
})
export class DirectionComponent {
  title = 'Angular 2 Maps Sample - Direction';
  lat : number = 21.1421125;
  lng : number = 79.1111018; 
  origin : any;
  destination : any;
  dForm : FormGroup;

  countries : any = [
      {'id': 440032, 'name': 'Nagpur, India'},
      {'id':500049, 'name': 'Hyderabad, India'} 
  ]

  ngOnInit(): void{
    this.dForm = this._fb.group({
            'origin': [this.countries[0]['id'], Validators.required],
            'destination': [this.countries[1]['id'], Validators.required]
        });
  }

  constructor(private _fb: FormBuilder) {

    }

  getDirections():void{}
}
