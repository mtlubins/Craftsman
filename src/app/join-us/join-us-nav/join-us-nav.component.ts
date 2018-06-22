import {Component} from '@angular/core';
// import {environment} from '../../../environments/environment';
@Component({
  template: `
    <div class="selection-container">
      <div [routerLink]="['user']" class="user">
        <div class="photo-layer-user">
          <svg class="craftsman-icon">
            <use xlink:href="/assets/images/vectors/user_icon.svg#userico"></use>
          </svg>
          <p class="craftsman-text">Zarejestruj się jako zleceniodawca</p>
        </div>
      </div>
      <div [routerLink]="['craftsman']" class="craftsman">
        <div class="photo-layer-craftsman">
          <svg class="craftsman-icon">
            <use xlink:href="/assets/images/vectors/craftsman_icon.svg#crafico"></use>
          </svg>
          <p class="craftsman-text">Zarejestruj się jako rzemieślnik</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./join-us-nav.component.scss']
})
export class JoinUsNavComponent {
  // TO DO: routerPaths environments instead of hardcoded links
  // public dupa = environment.routerPaths.userEnrollment;
}
