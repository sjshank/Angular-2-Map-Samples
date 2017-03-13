import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/*
    Angular manipulates the DOM with structural directives.
    Custom structural directive for rendering Lat and Lng of pincode
*/

@Directive({
    selector: '[geoLocation]'
    
})
export class GeoLocationDirective {

constructor(private _templateRef: TemplateRef<any>, private _viewContainer : ViewContainerRef){}

@Input() set geoLocation(hasLocations: boolean){
    if(hasLocations){
        this._viewContainer.createEmbeddedView(this._templateRef);
    }else{
        this._viewContainer.clear();
    }
}
}
