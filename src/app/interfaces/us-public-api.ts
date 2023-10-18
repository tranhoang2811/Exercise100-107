export interface IUsNation {
  'ID Nation': string;
  Nation: string;
  'ID Year': string;
  Year: string;
  Population: number;
  'Slug Nation': string;
}

export interface IUsNationData {
  data: IUsNation[];
}
