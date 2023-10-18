import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { IUsNationData } from '../interfaces/us-public-api';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class UsPublicApiService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  public getUsPublicApiData(): Observable<IUsNationData> {
    return this.httpClient
      .get<IUsNationData>('/api/data?drilldowns=Nation&measures=Population')
      .pipe(retry(3), catchError(this.errorService.handleError));
  }
}
