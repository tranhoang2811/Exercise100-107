import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { IPublicApiData } from '../interfaces/public-api';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class PublicApiService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  public getPublicApis(): Observable<IPublicApiData> {
    return this.httpClient
      .get<IPublicApiData>('/entries')
      .pipe(retry(3), catchError(this.errorService.handleError));
  }
}
