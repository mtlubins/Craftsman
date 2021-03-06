import {Component} from '@angular/core';

@Component({
  styleUrls: [`./homepage.component.scss`],
  template: `
    <h1>Rzemieślnicy</h1>

    <agm-map [latitude]="lat" [longitude]="lng">
      <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
    </agm-map>
  `
})
export class HomepageComponent {
  lat = 51.678418;
  lng = 7.809007;
}
