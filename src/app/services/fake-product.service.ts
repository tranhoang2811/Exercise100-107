import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { IFakeProduct } from '../interfaces/fake-product';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class FakeProductService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  public getFakeProductData(): Observable<IFakeProduct[]> {
    return this.httpClient
      .get<IFakeProduct[]>('/products')
      .pipe(retry(3), catchError(this.errorService.handleError));
  }
}
