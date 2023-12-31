import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/accueil/accueil.module').then(m => m.AccueilModule)
  },
  {
    path: 'twitch',
    loadChildren: () => import('./modules/twitch/twitch.module').then(m => m.TwitchModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
