import { Directive, ElementRef, Input, OnInit } from '@angular/core';

declare var google: any;

@Directive({
  selector: '[googleMaps]',
})
export class GoogleMapsDirective implements OnInit {
  @Input('googleMaps')
    location!: { lat: number; lng: number; };

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const { lat, lng } = this.location;
    const mapOptions = {
      center: new google.maps.LatLng(lat, lng),
      zoom: 12,
    };

    const map = new google.maps.Map(this.elementRef.nativeElement, mapOptions);

    // Additional map customization or marker placements can be done here
  }
}
