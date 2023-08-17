import {Component} from '@angular/core';
import {faX, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {faDiscord, faInstagram, faTiktok, faTwitch, faYoutube} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.scss']
})
export class WelcomeSectionComponent {
  twitchLogo: IconDefinition = faTwitch;
  youtubeLogo: IconDefinition = faYoutube;
  twitterLogo: IconDefinition = faX;
  instagramLogo: IconDefinition = faInstagram;
  discordLogo: IconDefinition = faDiscord;
  tiktokLogo: IconDefinition = faTiktok;
}
