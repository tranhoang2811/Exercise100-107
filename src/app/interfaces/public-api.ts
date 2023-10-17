export interface IPublicApi {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

export interface IPublicApiData {
  count: number;
  entries: IPublicApi[];
}
