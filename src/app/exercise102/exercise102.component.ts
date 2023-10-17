import { Component } from '@angular/core';
import { IFakeProduct } from '../interfaces/fake-product';
import { FakeProductService } from '../services/fake-product.service';

@Component({
  selector: 'app-exercise102',
  templateUrl: './exercise102.component.html',
  styleUrls: ['./exercise102.component.css'],
})
export class Exercise102Component {
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
