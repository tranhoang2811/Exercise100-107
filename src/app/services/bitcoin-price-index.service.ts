import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { IBitcoinPriceData } from '../interfaces/bitcoin-price-index';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class BitcoinPriceIndexService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  public getBitcoinPriceIndex(): Observable<IBitcoinPriceData> {
    return this.httpClient
      .get<IBitcoinPriceData>('/v1/bpi/currentprice.json')
      .pipe(retry(3), catchError(this.errorService.handleError));
  }
}
