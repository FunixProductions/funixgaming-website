import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClassementComponent} from './components/classement/classement.component';

const routes: Routes = [
  {
    path: 'classement', component: ClassementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwitchRoutingModule { }
