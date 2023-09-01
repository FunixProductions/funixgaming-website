import {Component, Input} from '@angular/core';
import {FunixbotUserExpDto} from "@funixproductions/funixproductions-requests";

@Component({
  selector: 'app-twitch-level-user',
  templateUrl: './twitch-level-user.component.html',
  styleUrls: ['./twitch-level-user.component.scss']
})
export class TwitchLevelUserComponent {
  @Input() userExp: FunixbotUserExpDto | undefined;
  @Input() userExpIndex: number | undefined;
}
