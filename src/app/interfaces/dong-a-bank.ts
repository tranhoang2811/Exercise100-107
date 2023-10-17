export interface IDongABankItem {
    type: string;
    imageurl: string;
    muatienmat: string;
    muack: string;
    bantienmat: string;
    banck: string
}

export interface IDongABankData {
    items: IDongABankItem[];
}