import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ApiFunixBotUserExpResponse} from './entities/types/funixbot';
import {Observable} from 'rxjs';
import {RequestPagination} from '../core/entities/utils/PaginationUtils';
import {ApiPagination} from '../core/entities/types/pagination';

@Injectable({
  providedIn: 'root'
})
export class FunixgamingApiService {

  constructor(private http: HttpClient) { }
  protected readonly API_URL: string = 'https://api.funixgaming.fr';

  private getPaginatedApiElement<T extends ApiPagination>(path: string, pagination: RequestPagination): Observable<T> {
    const search: string = pagination.search ? pagination.search?.map((s) => s.search).join(',') : '';
    const sort: string = pagination.sort ? pagination.sort?.map((s) => s.sort).join(',') : '';
    const params: HttpParams = new HttpParams()
      .append('page', pagination.page.toString())
      .append('elemsPerPage', pagination.elemsPerPage.toString())
      .append('search', `${search}`)
      .append('sort', `${sort}`);
    return this.http.get<T>(this.API_URL + path, { params: params });
  }

  getFunixBotUserExp(pagination: RequestPagination): Observable<ApiFunixBotUserExpResponse> {
    return this.getPaginatedApiElement<ApiFunixBotUserExpResponse>('/funixbot/user/exp', pagination);
  }
}
