import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TwitchLevelsComponent} from "./twitch-levels/twitch-levels.component";

const routes: Routes = [
  { path: '', children: [
      { path: 'levels', component: TwitchLevelsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwitchRoutingModule { }
