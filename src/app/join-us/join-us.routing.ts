import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JoinUsComponent} from './enrollment-container/join-us.component';

const routes: Routes = [
  {
    path: '',
    component: JoinUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoinUsRouting {}
