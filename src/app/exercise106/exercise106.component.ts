import { Component } from '@angular/core';
import { IUsNation, IUsNationData } from '../interfaces/us-public-api';
import { UsPublicApiService } from '../services/us-public-api.service';

@Component({
  selector: 'app-exercise106',
  templateUrl: './exercise106.component.html',
  styleUrls: ['./exercise106.component.css'],
})
export class Exercise106Component {
  public usNations: IUsNation[] = [];
  public errorMessage: string = '';

  constructor(private usPublicApiService: UsPublicApiService) {
    this.usPublicApiService.getUsPublicApiData().subscribe({
      next: (usNationData: IUsNationData) => {
        this.usNations = usNationData.data;
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
    });
  }
}
