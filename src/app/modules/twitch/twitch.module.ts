import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TwitchRoutingModule} from "./twitch-routing.module";
import { TwitchLevelsComponent } from './twitch-levels/twitch-levels.component';
import { TwitchLevelUserComponent } from './twitch-levels/twitch-level-user/twitch-level-user.component';

@NgModule({
  declarations: [
    TwitchLevelsComponent,
    TwitchLevelUserComponent
  ],
  imports: [
    CommonModule,
    TwitchRoutingModule
  ]
})
export class TwitchModule { }
