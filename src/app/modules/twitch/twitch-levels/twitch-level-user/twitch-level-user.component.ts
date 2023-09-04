import {Component, Input, OnInit} from '@angular/core';
import {FunixbotUserExpDto} from "@funixproductions/funixproductions-requests";

@Component({
  selector: 'app-twitch-level-user',
  templateUrl: './twitch-level-user.component.html',
  styleUrls: ['./twitch-level-user.component.scss']
})
export class TwitchLevelUserComponent {
  @Input() userExp: FunixbotUserExpDto = new FunixbotUserExpDto();
  @Input() userExpIndex: number = 0;

  getImageRanking(): string {
    if (this.userExpIndex === 1) {
      return '/assets/funixbot/ranking/first.webp';
    } else if (this.userExpIndex === 2) {
      return '/assets/funixbot/ranking/second.webp';
    } else if (this.userExpIndex === 3) {
      return '/assets/funixbot/ranking/third.webp';
    } else {
      return '/assets/funixbot/ranking/first.webp';
    }
  }
}
