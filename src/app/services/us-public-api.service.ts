import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class UsPublicApiService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  public getUsPublicApiData() {
    return this.httpClient.get('/api/data');
  }
}
