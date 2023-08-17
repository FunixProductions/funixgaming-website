import {Component} from '@angular/core';
import {faDiscord, faInstagram, faTiktok, faTwitch, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faX, IconDefinition} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  twitchLogo: IconDefinition = faTwitch;
  youtubeLogo: IconDefinition = faYoutube;
  twitterLogo: IconDefinition = faX;
  instagramLogo: IconDefinition = faInstagram;
  discordLogo: IconDefinition = faDiscord;
  tiktokLogo: IconDefinition = faTiktok;

}
