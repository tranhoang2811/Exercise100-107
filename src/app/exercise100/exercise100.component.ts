import { Component } from '@angular/core';
import { IDongABankData, IDongABankItem } from '../interfaces/dong-a-bank';
import { DongABankService } from '../services/dong-a-bank.service';

@Component({
  selector: 'app-exercise100',
  templateUrl: './exercise100.component.html',
  styleUrls: ['./exercise100.component.css'],
})
export class Exercise100Component {
  public dongABankItems: IDongABankItem[] = [];
  public errorMessage: string = '';

  constructor(private dongABankService: DongABankService) {
    this.dongABankService.getDongABankData().subscribe({
      next: (data: IDongABankData) => {
        this.dongABankItems = data?.items ?? [];
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
    });
  }
}
