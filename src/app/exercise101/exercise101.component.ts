import { Component } from '@angular/core';
import { IFakeProduct } from '../interfaces/fake-product';
import { FakeProductService } from '../services/fake-product.service';

@Component({
  selector: 'app-exercise101',
  templateUrl: './exercise101.component.html',
  styleUrls: ['./exercise101.component.css'],
})
export class Exercise101Component {
  public fakeProducts: IFakeProduct[] = [];
  public errorMessage: string = '';

  constructor(private fakeProductService: FakeProductService) {
    this.fakeProductService.getFakeProductData().subscribe({
      next: (data: IFakeProduct[]) => {
        this.fakeProducts = data ?? [];
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
    });
  }
}
