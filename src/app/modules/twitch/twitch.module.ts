import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TwitchRoutingModule} from './twitch-routing.module';
import {ClassementComponent} from './components/classement/classement.component';
import { UserExpCardComponent } from './components/user-exp-card/user-exp-card.component';


@NgModule({
  declarations: [
    ClassementComponent,
    UserExpCardComponent
  ],
  imports: [
    CommonModule,
    TwitchRoutingModule
  ]
})
export class TwitchModule { }
