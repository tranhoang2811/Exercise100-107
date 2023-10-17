import { Component } from '@angular/core';
import { IRandomImage } from '../interfaces/random-image';
import { RandomImageService } from '../services/random-image.service';

@Component({
  selector: 'app-exercise107',
  templateUrl: './exercise107.component.html',
  styleUrls: ['./exercise107.component.css'],
})
export class Exercise107Component {
  public randomImageUrl: string = '';
  public errorMessage: string = '';

  constructor(private randomImageService: RandomImageService) {
    this.refreshImage();

  }

  public refreshImage(): void {
    this.randomImageService.getRandomImage().subscribe({
      next: (data: IRandomImage) => {
        this.randomImageUrl = data.message;
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
    });
  }
}
