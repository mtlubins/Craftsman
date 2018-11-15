import {Component} from '@angular/core';

@Component({
  template: `
    <agm-map [latitude]="lat" [longitude]="lng">
      <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
    </agm-map>
  `,
  styles: ['agm-map {height: 400px;}'],
})
export class SearchComponent {
  lat = 51.678418;
  lng = 7.809007;
}
