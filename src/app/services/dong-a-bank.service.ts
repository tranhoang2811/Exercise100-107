import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry } from 'rxjs';
import { IDongABankData } from '../interfaces/dong-a-bank';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class DongABankService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  public getDongABankData(): Observable<IDongABankData> {
    const options: Object = {
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      responseType: 'text',
    };
    return this.httpClient.get('/exchange/export', options).pipe(
      map((data) => JSON.parse((data as string).slice(1, -1))),
      retry(3),
      catchError(this.errorService.handleError)
    );
  }
}
