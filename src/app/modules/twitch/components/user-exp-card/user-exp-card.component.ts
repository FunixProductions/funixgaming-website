import {Component, Input} from '@angular/core';
import { FunixBotUserExp } from 'src/app/services/funixgaming-api/entities/types/funixbot';

@Component({
  selector: 'app-user-exp-card',
  templateUrl: './user-exp-card.component.html',
  styleUrls: ['./user-exp-card.component.scss']
})
export class UserExpCardComponent {
  @Input() userExp!: FunixBotUserExp;
}
