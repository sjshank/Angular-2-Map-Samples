import {GoogleMapsAPIWrapper} from 'angular2-google-maps/core/services/google-maps-api-wrapper';
import { Directive,  Input} from '@angular/core';
declare var google: any;



@Directive({
  selector: 'sebm-google-map-directions'
})
export class DirectionsMapDirective {
  @Input() origin;
  @Input() destination;
  @Input() directionsDisplay;
  
  constructor (private gmapsApi: GoogleMapsAPIWrapper) {}
  ngOnInit(){
    this.loadDirections();
  }

  loadDirections(): void{
      this.gmapsApi.getNativeMap().then(map => {
        var me = this;
              var directionsService = new google.maps.DirectionsService;
              this.directionsDisplay = new google.maps.DirectionsRenderer;
              this.directionsDisplay.setMap(map);
              /*directionsDisplay.setOptions({
                polylineOptions: {
                            strokeWeight: 8,
                            strokeOpacity: 0.7,
                            strokeColor:  '#00468c' 
                        }
                });*/
              this.directionsDisplay.setDirections({routes: []});
              directionsService.route({
                      origin: {lat: this.origin.latitude, lng: this.origin.longitude},
                      destination: {lat: this.destination.latitude, lng: this.destination.longitude},
                      optimizeWaypoints: true,
                      travelMode: 'DRIVING' 
                    }, function(response, status) {
                                if (status === 'OK') {
                                  me.directionsDisplay.setDirections(response);
                                  document.getElementById('directionsList').innerHTML = '';
                                  me.directionsDisplay.setPanel(document.getElementById('directionsList'));
                                } else {
                                    console.log(status);
                                  window.alert('Directions request failed due to ' + status);
                                }
              });

    });
  }
}