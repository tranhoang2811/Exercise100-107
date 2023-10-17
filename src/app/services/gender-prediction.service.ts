import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { IGenderPrediction } from '../interfaces/gender-prediction';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class GenderPredictionService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  public predictGender(name: string): Observable<IGenderPrediction> {
    return this.httpClient
      .get<IGenderPrediction>(`https://api.genderize.io/?name=${name}`)
      .pipe(retry(3), catchError(this.errorService.handleError));
  }
}
