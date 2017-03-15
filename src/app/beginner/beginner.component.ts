import { Component } from '@angular/core';
import { Http } from '@angular/http';

declare let google: any;

import { WindowRef } from '../window.service';

@Component({
  selector: 'map-beginner-sam',
  templateUrl: './beginner.component.html',
  styleUrls: ['./beginner.component.less']
})
export class BeginnerComponent {
  title = 'Angular 2 Maps Sample - Beginner';
  lat : number = 21.1421125;
  lng : number = 79.1111018; 
  win : any;

  constructor(private winRef: WindowRef){}


  ngOnInit(): void{
    
  }
}
