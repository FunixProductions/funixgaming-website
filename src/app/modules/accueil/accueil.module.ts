import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AccueilComponent} from './accueil.component';
import {AccueilRoutingModule} from "./accueil-routing.module";
import {WelcomeSectionComponent} from './components/welcome-section/welcome-section.component';

@NgModule({
  declarations: [
    AccueilComponent,
    WelcomeSectionComponent,
  ],
  imports: [
    CommonModule,
    AccueilRoutingModule,
    NgbModule
  ]
})
export class AccueilModule { }
