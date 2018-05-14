import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JoinUsNavComponent} from './join-us-nav/join-us-nav.component';
import {UserEnrollmentComponent} from './user/user-enrollment.component';
import {CraftsmanEnrollmentComponent} from './craftsman/craftsman-enrollment.component';
import {JoinUsContainerComponent} from './join-us-container/join-us-container.component';

const routes: Routes = [
  {
    path: '',
    component: JoinUsContainerComponent,
    children: [
      { path: '', component: JoinUsNavComponent},
      { path: 'user', component: UserEnrollmentComponent },
      { path: 'craftsman', component: CraftsmanEnrollmentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoinUsRouting {}
