import {Component, OnInit} from '@angular/core';
import {SearchEnum} from 'src/app/services/core/entities/enums/PaginationEnums';
import {PaginationSearch, RequestPagination} from 'src/app/services/core/entities/utils/PaginationUtils';
import {FunixBotUserExp} from 'src/app/services/funixgaming-api/entities/types/funixbot';
import {FunixBotUserExpFields} from 'src/app/services/funixgaming-api/enums/funixbot';
import {FunixgamingApiService} from 'src/app/services/funixgaming-api/funixgaming-api.service';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.scss']
})
export class ClassementComponent implements OnInit {
  usersExp!: FunixBotUserExp[];
  pagination: RequestPagination = new RequestPagination(undefined, 3, [new PaginationSearch(FunixBotUserExpFields.LEVEL, SearchEnum.GREATER_THAN, 100)]);

  constructor(private funixgamingapi: FunixgamingApiService) {}

  ngOnInit(): void {
    this.funixgamingapi.getFunixBotUserExp(this.pagination).subscribe((data) => {
      this.usersExp = data.content;
    })
  }
}
