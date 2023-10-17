import { Component } from '@angular/core';
import {
  IBitcoinPriceData,
  IBitcoinPriceIndex,
} from '../interfaces/bitcoin-price-index';
import { BitcoinPriceIndexService } from '../services/bitcoin-price-index.service';

@Component({
  selector: 'app-exercise103',
  templateUrl: './exercise103.component.html',
  styleUrls: ['./exercise103.component.css'],
})
export class Exercise103Component {
  public bitcoinPriceIndexes: IBitcoinPriceIndex[] = [];
  public errorMessage: string = '';

  constructor(private bitcoinPriceIndexService: BitcoinPriceIndexService) {
    this.bitcoinPriceIndexService.getBitcoinPriceIndex().subscribe({
      next: (data: IBitcoinPriceData) => {
        console.log(data)
        this.bitcoinPriceIndexes = Object.values(data?.bpi ?? {});
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
    });
  }
}
