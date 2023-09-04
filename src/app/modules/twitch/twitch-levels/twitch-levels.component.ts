import {AfterViewInit, Component, Inject, PLATFORM_ID} from '@angular/core';
import {
  FunixbotUserExpCrudService,
  FunixbotUserExpDto,
  PageOption,
  QueryBuilder
} from "@funixproductions/funixproductions-requests";
import {HttpClient} from "@angular/common/http";
import {isPlatformBrowser} from "@angular/common";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-twitch-levels',
  templateUrl: './twitch-levels.component.html',
  styleUrls: ['./twitch-levels.component.scss']
})
export class TwitchLevelsComponent implements AfterViewInit {

  private readonly funixbotLevelsService: FunixbotUserExpCrudService;
  viewers: FunixbotUserExpDto[] = [];

  constructor(httpClient: HttpClient,
              @Inject(PLATFORM_ID) private platformId: Object) {
    this.funixbotLevelsService = new FunixbotUserExpCrudService(httpClient, environment.production);
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const pageOption: PageOption = new PageOption();
    pageOption.elemsPerPage = 100;
    pageOption.page = 0;
    pageOption.sort = 'level:desc,xp:desc';

    this.funixbotLevelsService.find(pageOption, new QueryBuilder()).subscribe({
      next: (viewers) => {
        this.viewers = viewers.content;
      }
    })
  }

}
