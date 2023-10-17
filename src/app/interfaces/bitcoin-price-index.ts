export interface IBitcoinPriceIndex {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}

export interface IBitcoinPriceTime {
  updated: string;
  updatedISO: string;
  updateduk: string;
}

export interface IBitcoinPriceData {
  time: IBitcoinPriceTime;
  disclaimer: string;
  chartName: string;
  bpi: Record<string, IBitcoinPriceIndex>;
}
