import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { IRandomImage } from '../interfaces/random-image';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class RandomImageService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  public getRandomImage(): Observable<IRandomImage> {
    return this.httpClient
      .get<IRandomImage>('/api/breeds/image/random')
      .pipe(retry(3), catchError(this.errorService.handleError));
  }
}
