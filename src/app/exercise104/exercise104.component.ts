import { Component } from '@angular/core';
import { IPublicApi, IPublicApiData } from '../interfaces/public-api';
import { PublicApiService } from '../services/public-api.service';

@Component({
  selector: 'app-exercise104',
  templateUrl: './exercise104.component.html',
  styleUrls: ['./exercise104.component.css'],
})
export class Exercise104Component {
  public publicApis: IPublicApi[] = [];
  public errorMessage: string = '';

  constructor(private publicApiService: PublicApiService) {
    this.publicApiService.getPublicApis().subscribe({
      next: (data: IPublicApiData) => {
        this.publicApis = data.entries;
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
    });
  }
}
