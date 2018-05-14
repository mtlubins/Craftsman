import {Component} from '@angular/core';

@Component({
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 registration-headers">
          <span class="yellow-header">Formularz rejestracyjny</span>
          <h3 class="join-us-header">Zarejestruj się u nas!</h3>
        </div>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./join-us-container.scss']
})
export class JoinUsContainerComponent {}
