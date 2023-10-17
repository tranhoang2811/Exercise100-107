import { Component } from '@angular/core';
import { debounce, debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { IGenderPrediction } from '../interfaces/gender-prediction';
import { GenderPredictionService } from '../services/gender-prediction.service';

@Component({
  selector: 'app-exercise105',
  templateUrl: './exercise105.component.html',
  styleUrls: ['./exercise105.component.css'],
})
export class Exercise105Component {
  public genderPrediction: IGenderPrediction | undefined;
  public errorMessage: string = '';
  private nameUpdate = new Subject<string>();

  constructor(private genderPredictionService: GenderPredictionService) {
    this.nameUpdate
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value: string) => {
        this.genderPredictionService.predictGender(value).subscribe({
          next: (data: IGenderPrediction) => {
            this.genderPrediction = data;
          },
          error: (error) => {
            this.errorMessage = error.message;
          },
        });
      });
  }

  public onNameChange(event: Event): void {
    const name = (event.target as HTMLInputElement).value;
    this.nameUpdate.next(name);
  }
}
